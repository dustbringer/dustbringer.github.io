---
slug: "/posts/2021-11-27-git-prompt"
title: Something about git-prompt
description: Notes for self about git-prompt
author: dustbringer
date: 2021-11-27
tags:
    - git
    - bash
---

# `git-prompt.sh`
> Allows you to see repository status in your command prompt.

The script can be found [here](https://raw.githubusercontent.com/git/git/master/contrib/completion/git-prompt.sh).

This can be 'installed' as follows:
- Copy the file somewhere
- Then add `source path/to/git-prompt.sh` at the end of `~/.bashrc`

To add git repo information to your bash prompt:
- Get current prompt layout, `$ echo $PS1`
- Copy the output and add `$(__git_ps1 " (%s)")` somewhere in it
- Add the line `export PS1=YOUR_EDITED_LAYOUT` at the end of `~/.bashrc`
- Restart bash
  - If you get the error `bash: __git_ps1: command not found`, then make sure that the `git-prompt.sh` is run properly

> Source: https://stackoverflow.com/questions/21140815/how-do-i-modify-cygwins-ps1-for-git-bash-completion

