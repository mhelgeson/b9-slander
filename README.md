[![NPM](https://nodei.co/npm/b9-slander.png?compact=true)](https://nodei.co/npm/b9-slander/)<br />
[![Build Status](https://travis-ci.org/mhelgeson/b9-slander.svg?branch=master)](https://travis-ci.org/mhelgeson/b9-slander)
[![Coverage Status](https://coveralls.io/repos/github/mhelgeson/b9-slander/badge.svg?branch=master)](https://coveralls.io/github/mhelgeson/b9-slander?branch=master)
- - -

# b9-slander
A [b9](https://github.com/mhelgeson/b9) slack bot plugin, which makes archaic, false, and damaging statements about users.

## Methods

#### `b9.slander()`
Returns a random slanderous string.

## Commands

#### `slander [user] [channel]`
Make a random slanderous statement directed at a user.

- **`user`** *`{String}`* <br />
Name of someone to target. Defaults to a randomly selected user.

- **`channel`** *`{String}`* <br />
Optional `id` of a channel to use. Defaults to the current channel.

## Examples

```
usr: slander
bot: bot is a dankish dizzy-eyed bedswerver
```

```
usr: slander @mike
bot: @mike is a clouted idle-headed zounderkite
```
