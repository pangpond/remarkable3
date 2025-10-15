---
slug: github-and-friends
title: Github and Friends
authors: [pangpond]
tags: [code, git]
---

ghq

<!-- truncate -->

```
brew install ghq
```

gq.sh

```ssh
// create gq.sh
vim gq.sh

// put content below
gq () {
  local url="$1"
  local repo_path=$(echo "$url" | sed 's|https://github.com/||' | sed 's|git@github.com:||' | sed 's|\.git$||')
  local full_path="$HOME/Code/github.com/$repo_path"
  if [ -d "$full_path" ]
  then
    echo "📂 Repo exists, pulling latest changes..."
    cd "$full_path"
    git pull
  else
    ghq get -p "$url" && cd "$full_path"
  fi
}

// make it can run
sudo chmod +x gq.sh

//alias
ln -s ~/gq.sh /usr/local/bin/gq

```

### install tmux, yq, uvx

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
