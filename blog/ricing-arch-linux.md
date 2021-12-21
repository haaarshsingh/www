---
title: 'Ricing Arch Linux'
date: '2021-12-21'
formattedDate: '20 December, 2021'
description: 'This is a guide for ricing your Arch Linux desktops. We will be going over different applications & how you can customise them to make the Linux setup of your dreams!'
---

# What is a rice?

Now, the word "rice" might remind you of 🍚 -- but what we're going to do today is a bit different from that.

The ricing terminology comes from cars, & it's an acronym of Race Inspired Cosmetic Enhancements. It esentially means to soup cars it up with stickers, etc, for improved aesthetics.

In the context of computers, ricing means to soup up our system with cool features, and make it look, function, and feel better.

There's an endless amount of things you can customise while ricing your desktop.

For more suggestions, tips, etc -- I suggest taking a look at [r/unixporn](https://www.reddit.com/r/unixporn/).

# Getting Started

Now, let's get started with the different categories of applications & utilities you need to rice your system.

## Window Managers

Window manager is perhaps the most basic stepping stone of creating a rice. A window manager is esentially system software that controls the placement & appearance of windos within a windowing system in a graphical user interface.

A tiling window manager is a variant of window managers, however, it organises screens into mutual frames allowing you to navigate through your system windows without the use of your mouse.

There's an infinite list of tiling window managers people use, & some daring folks even write their own! However, here are the most commonly used ones:

- [i3wm](https://i3wm.org/)
- [awesome](https://awesomewm.org/)
- [xmonad](https://xmonad.org/)
- [Openbox](http://openbox.org/wiki/Main_Page)
- [dwm](https://dwm.suckless.org/)
- [Wayland](https://wayland.freedesktop.org/)
- [bspwm](https://github.com/baskerville/bspwm)

In my rice, I personally use [i3wm-gaps-rounded](https://aur.archlinux.org/packages/i3-gaps-rounded-git/), which is basically a fork of i3wm with more features, including gaps & rounded corners.

## Desktop Environment

A desktop environment is the bundle of components that provide you common graphical user interface elements such as icons, toolbars, wallpapers, and desktop widgets. A desktop environment is essential to your Linux system, unless you prefer to interact with it from the terminal utility using commands only.

Some of the most popular desktop environments are:

- [Gnome](https://www.gnome.org/)
- [KDE Plasma](https://kde.org/plasma-desktop/)
- [XFCE](https://www.xfce.org/)
- [LXDE](https://www.lxde.org/)
- [LXQt](https://lxqt-project.org/)
- [MATE](https://mate-desktop.org/)

In my rice, I use [Gnome](https://www.gnome.org/), as it's really popular & has easy to follow guides/documentation all over the web.

## Terminals

A terminal, or terminal emulator, is a computer program that emulates a video terminal within some other display architecture. Unlike Windows or macOS, they're a crucial part of the Linux experience. Some of the best ones are:

- [Alacritty](https://github.com/alacritty/alacritty)
- [kitty](https://sw.kovidgoyal.net/kitty/)
- [suckless](https://st.suckless.org/)
- [rxvt](http://rxvt.sourceforge.net/)
- [GNOME Terminal](https://github.com/GNOME/gnome-terminal)
- [Hyper](https://hyper.is/)
- [xterm](https://invisible-island.net/xterm/)

In my rice, I've gone with [Alacritty](https://github.com/alacritty/alacritty), as it's a fast GPU-accelerated & puts a special emphasis on performance & simplicity. It's written in Rust & uses OpenGL.

## Shells

When we talk about terminals, it's essential that we also bring up shells. The shell is the software that interprets and executes the various commands that we type in the terminal. Terminals esentially act as a wrapper around shells.

Some loved shells are:

- [Bash](https://www.gnu.org/software/bash/)
- [ZSH](https://zsh.sourceforge.io/)
- [Fish](https://fishshell.com/)
- [NuShell](https://www.nushell.sh/)
- [Ion](https://docs.rs/crate/ion-shell/1.0.5)

I've used a wide variety of different shells, however, my personal favourites are [NuShell](https://www.nushell.sh/) & [Fish](https://fishshell.com/). [Fish](https://fishshell.com/) is preconfigured out of the box, & is insanely easy to setup. [NuShell](https://www.nushell.sh/) on the other hand also offers something similar. For this rice, I with with [NuShell](https://www.nushell.sh/) as I really like the colourful command outputs it has built-in by defualt.

## Status Bars

Status bars are a crucial utility to our systems. I can't imagine my life witohut them! It's a quick & effective way of grasping small bits of information, such as the time or your computer volume.

The most popular status bar applications are:

- [Polybar](https://polybar.github.io/)
- [Lemonbar](https://github.com/LemonBoy/bar)
- [i3-bar](https://i3wm.org/docs/userguide.html#_configuring_i3bar)
- [xmobar](https://xmobar.org/)
- [Tint2](https://wiki.archlinux.org/title/tint2)

[Polybar](https://polybar.github.io/) is my preffered choice of status bar, as it's widely used across the ricing community. It's easy to setup modules & there are a lot of guides/tutorials out there for it.

## Miscellaneous

Here's a category of general utility stuff which is always useful when creating a rice:

- [dunst](https://dunst-project.org/) - Dunst is a lightweight replacement for the notification daemons.
- [mpd](https://www.musicpd.org/) - A daemon for playing music of various formats.
- [BetterDiscord](https://betterdiscord.app/) - Enhance the functionality of the Discord app
- [Spicetify](https://github.com/khanhas/spicetify-cli) - Enhance the functionality of the Spotify app
- [compton](https://github.com/chjj/compton) - A compositor for X (unmaintained)
- [picom](https://github.com/yshui/picom) - Lightweight compositor for X11 (fork of compton)
- [Starship](https://starship.rs/) - The minimal, blazing-fast, and infinitely customizable prompt for any shell!
- [Vim](https://www.vim.org/) - A highly configurable text editor built to make creating and changing any kind of text very efficient.
- [Flameshot](https://flameshot.org/) - Powerful, easy to use creenshot software
- [feh](https://feh.finalrewind.org/) - X11 image viewer
- [Nitrogen](https://wiki.archlinux.org/title/nitrogen) - A fast & lightweight desktop background browser
- [rofi](https://github.com/davatorium/rofi) - A window switcher, application launcher and dmenu replacement
- [scrot](https://github.com/dreamer/scrot) - A simple screen capture utility
- [Shutter](https://shutter-project.org/) - The feature-rich screenshot tool

## Terminal Utilities

No rice is complete without a little bit of terminal glamour.

- [bat](https://github.com/sharkdp/bat) - a [cat](<https://en.wikipedia.org/wiki/Cat_(Unix)>) clone with syntax highlighting & git integration
- [cava](https://github.com/karlstav/cava) - Console-based audio visualiser for ALSA
- [pfetch](https://github.com/dylanaraps/pfetch) - A minimal system information tool
- [Neofetch](https://github.com/dylanaraps/neofetch) - A command-line system information tool
- [cpufetch](https://github.com/Dr-Noob/cpufetch) - Simple yet fancy CPU architecture fetching tool
- [gotop](https://github.com/cjbassi/gotop) - A terminal based graphical activity monitor inspired by gtop and vtop
- [htop](https://htop.dev/) - An interactive process viewer
- [ranger](https://ranger.github.io/) - A console file manager with VI key bindings

# Conclusion

All in all, ricing is a fun thing which I always look forward. I love playing around with themes, colours & trying out new applications/tools. Here's a list of handy tools & resources to get you started creating your own amazing setup!

Nobody's first rice is perfect, & it's a matter of practise until your setups start to improve & shine out.

Here's my first ever rice:

![image](https://user-images.githubusercontent.com/69592270/107448427-a7dea580-6b0f-11eb-8529-1a71bd7d90ec.png)

# 🖼️ Gallery

Here's some pics of my current Linux rice:

![image](https://user-images.githubusercontent.com/69592270/144723641-b42d960d-5fca-42e1-99f1-ac11b4cb160b.png)
![image](https://user-images.githubusercontent.com/69592270/144723771-11286d0d-0141-4564-b825-4fafc15e11ea.png)
![image](https://user-images.githubusercontent.com/69592270/144723927-2c924750-e5fc-487e-a336-4ee57b269038.png)
![image](https://user-images.githubusercontent.com/69592270/144723969-f8345c5a-29ab-4ee5-bded-ea014cef8b72.png)
