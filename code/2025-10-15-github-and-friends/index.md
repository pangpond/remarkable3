---
slug: github-and-friends
title: Github and Friends
authors: [pangpond]
tags: [code, git]
---

- gh
- ghq
- gq
- tmux

<!-- truncate -->

#### 1. install gh, ghq with homebrew

```
brew install gh
brew install ghq


// make sure gh work
gh auth login
gh auth status
```

#### 2. create gq.sh

create `~/sandbox/scripts/gq.sh` by copy content at https://gist.github.com/pangpond/e65ddd8abc7bc5c11b0babf98dc2cb57

```
mkdir -p ~/sandbox/scripts
touch ~/sandbox/scripts/gq.sh

```

#### 3. source the script

in your shell configuration file: Add this line to your ~/.zshrc (or ~/.bashrc if using bash):
`source ~/sandbox/scripts/gq.sh`

```
zed ~/.zshrc
```

#### 4. reload your shell:

`source ~/.zshrc`

#### 5. use the function:

`gq https://github.com/user/repo`

#### install tmux, yq, uvx

install uvx

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

install tmux, yq

```bash
brew install tmux yq
```

### init multi agent kit

```bash
uvx --no-cache --from git+https://github.com/Soul-Brews-Studio/multi-agent-workflow-kit.git@v0.5.1 multi-agent-kit init
```
