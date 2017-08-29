# wondrous-stylelint-config

> Sass Guidelines shareable config for stylelint.

A stylelint config based on [sass-guidelin.es](https://sass-guidelin.es/) and
[stylelint-config-sass-guidelines](https://github.com/bjankord/stylelint-config-sass-guidelines).

## Installation

```console
$ npm install --save wondrous-stylelint-config
```

## Usage

Set your stylelint config to:

```json
{
  "extends": "wondrous-stylelint-config"
}
```

### Extending the config

Simply add a `"rules"` key to your config and add your overrides there.

For example, to change the `indentation` to tabs and turn off the `number-leading-zero` rule:


```json
{
  "extends": "stylelint-config-sass-guidelines",
  "rules": {
    "indentation": "tab",
    "number-leading-zero": null
  }
}
```

## [License](LICENSE)
