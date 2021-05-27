---
title: 'Making a Discord Bot in Golang'
date: '2021-05-10'
formattedDate: '10 May, 2020'
description: 'Hey all! Hope you are having a wonderful day or night. Today, we will be going over how we can make a Discord Bot in Golang using the discord.go library!'
---

# Getting Started

To get started, we'll need to install Golang on our machine.
I've already installed it on my machine, but if you haven't yet, refer to the [download page.](https://golang.org/dl/)

# Setting up our project

Let's create a new directory, and inside of it let's create a new file called `main.go`

To test if everything is working out, let's run a quick test

```go
package main

import "fmt"

func main() {
  fmt.Println("👋 Hello from Golang!")
}
```

To run this, go into your terminal and use `go run main.go`

You should see the output working!

# Getting started with our bot

So, let's get started making our Discord bot. Let's import in some packages which we need:

```
import (
  "fmt"
  "os"
  "os/signal"
  "syscall"

  "github.com/bwmarrin/discordgo"
)
```

Since we're using a GitHub library, we need to install it.

To install this (or any other Golang library from GitHub), simply run `go get github.com/bwmarrin/discordgo`

Now, let's write some actual code. Let's start by creating a new session.

Below, you'll be need to put in your bot token which you can get from [Discord Developers.](https://discord.com/developers/)

```go
func main() {
  dg, err := discordgo.New("Bot ", "your discord token")
  if err != nil {
    fmt.Println(err)
    return
  }
}
```

Next, we need to open a websocket connection of our bot to Discord. We can do this by:

```go
err = dg.Open()
if err != nil {
  fmt.Println(err)
  return
}
```

Now, let's add a small message letting us know our bot is online!

```go
fmt.Println("🚀 Bot is online")
```

Let's try to run our bot. You'll see that it instantly kills the process.

To stop this from happening, we need to add the following code below our online message.

```go
sc := make(chan os.Signal, 1)
signal.Notify(sc, syscall.SIGINT, syscall.SIGTERM, os.Interrupt, os.Kill)
<-sc
```

Now, we need to add in a final line of code to make sure our Discord connection closes cleanly.

```go
dg.Close()
```

Now, if we run our bot, we can see that it's online and it works!

# Creating commands

Now that our bot is online, and it works, let's create some commands!

Let's create a new function which will handle messages being created.

Inside of here, let's first of all make sure that the bot ignores it's own messages, to avoid all chaos.

```go
func messageCreate(session *discordgo.Session, message *discordgo.MessageCreate) {
  if message.Author.ID == session.State.User.ID {
    return
  }
}
```

Now, let's listen for messages. Let's create a simple ping command!

```go
if message.Content == "!ping" {
  session.ChannelMessageSend(message.ChannelID, "pong!")
}
```

Now, let's go back into init function and add make sure we can listen for events. We'll also need to specify an intent for messages.

```go
dg.AddHandler(messageCreate)

dg.Identify.Intents = discordgo.IntentsGuildMessages
```

Now, if we run our bot again, we can see that everything should be working! If we type !ping, we should get a pong! response.

# Challenge

Now that we've setup a basic bot, I'd like to challenge you to add your bot token as an environment variable.

You can use any library, but I suggest [godotenv](https://github.com/joho/godotenv).
