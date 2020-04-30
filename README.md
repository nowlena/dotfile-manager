# Dotfile Manager

A simple node interface for managing dotfiles

## Configuration

### Update dotfiles.json

Add your dotfiles to `dotfiles.json` using the format provided:

```json
{
  "groups": [
    {
      "name": "ZSH",
      "files": [
        "~/.zshrc"
      ]
    },
    {
      "name": "nvim",
      "files": [
        "~/.config/nvim/init.vim",
        "~/.config/nvim/local_init.vim",
        "~/.config/nvim/local_bundles.vim",
      ]
    }
  ]
}
```

### Install dependencies

Using LTS Node, run `npm i` in this directory

## Usage

### Pull Files

To pull your local dotfiles into this repo, run the following command:

```sh
npm run pull
```

### Push Files

To push this repo's dotfiles to your local machine, run the following command:

```sh
npm run push
```
