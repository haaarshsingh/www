---
title: 'Using Apple Emojis in Linux'
date: '2021-05-13'
formattedDate: '13 May, 2020'
description: 'Hello everyone! In this quick tutorial, we will just be taking at how to replace the default Google Emojis with Apple emojis.'
language: 'bash'
---

# Emojis on Linux

By default, Linux comes installed with the NotoColorEmoji font, which, in my humble opinion looks a bit inferior to Apple's AppleColorEmoji font.

So, in this quick tutorial, we'll be going over how to get this awesome font installed on your Linux system.

Before we get started, here's a side-by-side comparison of emoji font across different platforms.

Linux is represented by "Google" in the chart below

![image](https://user-images.githubusercontent.com/69592270/106525030-5d2ab100-64b1-11eb-9fac-ee008116fd2f.png)

_[full video can be found here](https://www.youtube.com/watch?v=Exz-oZFlxUA)_

I'm curious to see which emoji you think looks the best. In my opinion, it goes Apple > Microsoft > Google > Samsung.

# Getting started

So, first off lets go to this [GitHub repo.](https://github.com/samuelngs/apple-emoji-linux)

As said in the readme, let's head over to [releases](https://github.com/samuelngs/apple-emoji-linux/releases).

![image](https://user-images.githubusercontent.com/69592270/106525498-112c3c00-64b2-11eb-9e2e-ee407d87a06c.png)

Click to install the AppleColorEmoji.ttf file.

When it's installed, you'll have to copy it over and replace it with your previous emoji file.

```bash
# ~
cd /usr/share/fonts/truetype/noto

# /usr/share/fonts/truetype/noto
$ ls -a
NotoColorEmoji.ttf  NotoMono-Regular.ttf  .uuid
```

Now, let's uninstall our NotoColorEmoji.ttf file.

```bash
# usr/share/fonts/truetype/noto
$ sudo rm NotoColorEmoji.ttf
```

Now, we need to copy over our fonts from our directory we installed them from to this

```bash
# usr/share/fonts/truetype/noto
$ sudo cp ~/path-to/AppleColorEmoji.ttf NotoColorEmoji.ttf
```

Now, let's logout of our system.

Log back in, head over to [emojipedia](https://emojipedia.com/) and you should see Apple emojis on your Linux system!

![image](https://user-images.githubusercontent.com/69592270/106526704-14282c00-64b4-11eb-9f60-36bb704b2fac.png)

That's it for today. If this was able to help you, I'm glad.
