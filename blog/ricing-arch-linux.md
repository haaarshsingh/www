---
title: 'Ricing Arch Linux'
date: '2021-06-22'
formattedDate: '22 June, 2021'
description: 'This is a guide for ricing your Arch Linux desktops. We will be going over how you can use and customise by dotfiles to make the computer setup of your dreams.'
---

# What is a rice?

Now, the word "rice" might remind you of 🍚 -- but what we're going to do today is a bit different from that 😅

The ricing terminology comes from [cars](https://www.urbandictionary.com/define.php?term=ricing), and it means to soup it up with stickers, etc.

In the context of computers, ricing means to soup up our system with cool features, and make it look, function, and feel better.

# What you'll be creating

![image](https://user-images.githubusercontent.com/69592270/122867380-651bae00-d2f7-11eb-9795-9fd69199a58c.png)

There's an endless amount of things you can customise while ricing your desktop.

For more suggestions, tips, etc -- I suggest taking a look at [r/unixporn](https://www.reddit.com/r/unixporn/).

# Installing packages

I'm assuming you already have Arch Linux installed. If not, get started by following the guide on [Arch Wiki](https://wiki.archlinux.org/title/installation_guide).

So, we'll need to install a few packages using pacman.

Go to your terminal, and run:

````zsh
sudo pacman -S i3 alacritty lightdm lightdm-gtk-greeter lightdm-gtk-greeter-settings picom feh lxappearance rofi neofetch arandr autotiling flameshot```
````

It's a big install, so it might take some time.

Now, we'll need to enable some stuff.

```zsh
sudo systemctl enable lightdm
```

With all of these installed, restart your PC.

You'll see the LightDM GTK Greeter pop up. Click the little button on the top, and make sure to switch your Window Manager to i3.

Now, you should be booted into our i3 Window Manager! Cool!

You'll see a little dialogue box pop-up at first. Make sure to select "Yes, generate the config"

Feel free to choose whichever key you like for the default modifier. Personally, I use the "Win" (super) key.

Now, press the modifier + Enter to open a new alacritty terminal instance.

Here, clone my dotfiles to your .config folder

```zsh
cd .config/

git clone https://github.com/harshhhdev/dotfiles.git/
```

Now, let's move onto modifying our packages.

# Installing our prompt

Now, you'll see that there's an error already when you open your terminal. This is because our [prompt](https://starship.rs/) hasn't been installed yet.

To install it, simply run

```zsh
sh -c "$(curl -fsSL https://starship.rs/install.sh)"
```

Now, starship and fish should be working together like a charm!

![image](https://user-images.githubusercontent.com/69592270/122986372-5bcd2880-d36d-11eb-9e4e-8168f5b79cbf.png)

# Installing yay

Yay is a frontend for pacman. Basically, allows us to build code from AUR repos.

To install,

```zsh
cd /opt

# Add sudo for system operation
sudo git clone https://aur.archlinux.org/yay-git.git

# Replace hostname and user with your hostname and user
sudo chown -R hostname:user ./yay-git

cd yay-git

# Build the package
make pkg -si
```

Awesome! Now yay should be installed.

# Background

Let's setup a wallpaper with feh.

Open your i3 config file (.config/i3/config)

Now, inside of here, jump to line 212 where we setup our wallpaper

Inside of here, feel free to add the path to the background. If you cloned my dotfiles, you can simply use

```zsh
exec_always feh --bg-fill ~/.config/Background.jpg
```

and it should work!

# Setting up NeoVim

Next, we'll need to setup our code/text editor: NeoVim.

If you prefer VSC, go ahead and install it with

```zsh
sudo pacman -S code

# Remove NeoVim (optional)
sudo pacman -Rns neovim
```

Now, let's install NeoVim.

We will need to use NeoVim v5 for our setup. As I talk, NeoVim v5 is not stable, and therefore, we'll have to download a nightly version.

Using yay, we can type in

```zsh
yay -S neovim-nightly-bin
```

With this, NeoVim should be installed.

We'll be using packer to install our packages.

Make sure to clone the package repository somewhere to your packpath, e.g.:

```zsh
git clone https://github.com/wbthomason/packer.nvim\
 ~/.local/share/nvim/site/pack/packer/start/packer.nvim
```

Now, open up NeoVim using the nvim command.

You'll see a bunch of errors. Don't worry -- that's expected. Type in `:PackerInstall` and your packages should install just fine.

Now, NeoVim should be working and ready to go!

![image](https://user-images.githubusercontent.com/69592270/122986450-77d0ca00-d36d-11eb-8f59-964e70e7c4e8.png)

I am using LunarVim, made by [ChrisAtMachine](https://www.youtube.com/channel/UCS97tchJDq17Qms3cux8wcA). I suggest you check out his [GitHub repo](https://github.com/ChristianChiarulli/LunarVim) for more instructions if you're puzzled.

# Monitor Setup

For this, we'll need arandr to visually setup our monitors.

Using arandr's visual GUI, you can customise your monitor layout to your needs.

![image](https://user-images.githubusercontent.com/69592270/122986497-86b77c80-d36d-11eb-9ee0-a5846cb8dec0.png)

After you're done, click on Layout > Save As and save it to your .screenlayout directory.

Now, open the .screenlayout/config.sh file

```zsh
nvim .screenlayout/config.sh

# If using Visual Studio Code
code .screenlayout/config.sh
```

Copy the contents (don't copy the comment up top)

Now, go back to your config file. Go to line 217 where we setup xrandr.

Add in the what you copied from the config.sh file, and add an `exec_always` infront letting i3 know to execute this on startup.

# Polybar

Finally, we'll have to setup our Polybar.

Now, this might take a bit of time.

Let's install polybar using yay

```zsh
yay -S polybar-git
```

Now, let's open our file using NeoVim.

```zsh
nvim ~/.config/polybar/forest/modules.ini

# Visual Studio Code
code ~/.config/polybar/forest/
# Open the modules file using the GUI
```

Here, go down to [module/weather](https://github.com/harshhhdev/dotfiles/blob/master/polybar/forest/modules.ini#L1093).

You'll need to go to [openeathermap](https://openweathermap.org/) and register yourself, and get an API key.

Then, you'll need to get a city code of your city, or a city near you.

Go back to the polybar config file, and fill in the info.

```ini
# Imagine using imperial units :p
exec = ~/.config/polybar/forest/scripts/weather.py --api=YOUR-API-KEY --city=CITY-CODE --units=metric

label = Your City Name %output%
```

Next, you'll need to setup the battery.

As stated in the comment, run `ls -1 /sys/class/power_supply/` to get input for the fields.

```ini
; Use the following command to list batteries and adapters:
; $ ls -1 /sys/class/power_supply/
battery = BAT1
adapter = ACAD
```

Next, we'll need to setup our network

Find the [module/wireless-network](https://github.com/harshhhdev/dotfiles/blob/92ec0c19a9e4613d9ed485ce7a9b19d605decca1/polybar/forest/modules.ini#L756)

I'm using wireless, so I'll have to go and get find which interface I'm using.

This differs for people, so make sure to set this up correctly if it shows as blank.

# Fonts, and GTK themes setup

Now, time to setup fonts, etc. for our system and other GTK apps.

For this, we'll be using the [Barlow](https://fonts.google.com/specimen/Barlow) and [JetBrains Mono](https://www.jetbrains.com/lp/mono/) font.

Go ahead and download both the fonts, and select [Barlow Medium](https://fonts.google.com/specimen/Barlow) as your default font.

Now, I'll drop links to the icon themes. Download them to a folder, then use the install feature given by lxappearance to bring in the themes.

[BigSur Icon Theme](https://www.gnome-look.org/s/Gnome/p/1405756)
[MacOS BigSur Cursor](https://www.gnome-look.org/p/1408466/)
[MacOS Dark Theme](https://www.gnome-look.org/p/1431904/)

# Emoji Picker

Now, we'll need to use our little emoji picker.

Go and clone the [rofiemoji](https://github.com/nkoehring/rofiemoji) repo

```zsh
git clone https://github.com/nkoehring/rofiemoji.git
```

Go into [line 168](https://github.com/harshhhdev/dotfiles/blob/master/i3/config#L168) in your i3 config file, and add in the location of your `rofiemoji.sh` file.

If you'd like to setup Apple Emojis in your Linux, feel free to check out my [previous post](https://harshhhdev.github.io/blog/apple-emojis-linux).

# Finishing Note

And, that's about it! That's all you need to get started with my dotfiles setup on your Arch Linux. If there are any problems, feel free to comment below. I'll respond to each and every one of them with thought :)

If this helped you, I'd really appreciate a star on my [dotfiles repo](https://github.com/harshhhdev/dotfiles).
