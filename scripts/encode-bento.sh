#!/usr/bin/env bash
# Encode every public/bento/*.mp4 into a smaller VP9 .webm and a re-compressed H.264 .mp4 fallback.
# Caps the longest edge at 1280px (retina-safe for the bento, which renders at ~500px max),
# strips audio, and uses CRF-based quality so visual fidelity stays constant.

set -euo pipefail

INPUT_DIR="public/bento"
WEBM_DIR="public/bento/_webm_tmp"
MP4_DIR="public/bento/_mp4_tmp"
mkdir -p "$WEBM_DIR" "$MP4_DIR"

# Cap longest edge at 1280 while keeping aspect ratio and even dimensions.
SCALE_FILTER="scale='if(gt(iw,ih),min(iw,1280),-2)':'if(gt(ih,iw),min(ih,1280),-2)'"

encode_one() {
  local in="$1"
  local base
  base="$(basename "${in%.mp4}")"
  local webm_out="$WEBM_DIR/$base.webm"
  local mp4_out="$MP4_DIR/$base.mp4"

  echo "[webm] $base"
  ffmpeg -y -loglevel error -i "$in" \
    -vf "$SCALE_FILTER" \
    -c:v libvpx-vp9 -crf 30 -b:v 0 \
    -row-mt 1 -tile-columns 2 -cpu-used 4 \
    -pix_fmt yuv420p \
    -an \
    "$webm_out"

  echo "[mp4 ] $base"
  ffmpeg -y -loglevel error -i "$in" \
    -vf "$SCALE_FILTER" \
    -c:v libx264 -crf 23 -preset slow -profile:v high -pix_fmt yuv420p \
    -movflags +faststart \
    -an \
    "$mp4_out"
}

export -f encode_one
export WEBM_DIR MP4_DIR SCALE_FILTER

# Encode up to 4 videos in parallel.
ls "$INPUT_DIR"/*.mp4 | xargs -n 1 -P 4 -I {} bash -c 'encode_one "$@"' _ {}

echo "--- WEBM sizes ---"
ls -lh "$WEBM_DIR"
echo "--- MP4  sizes ---"
ls -lh "$MP4_DIR"
