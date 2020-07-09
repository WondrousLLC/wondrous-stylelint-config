# wondrous-stylelint-config

> Sass Guidelines shareable config for stylelint.

A stylelint config based on [sass-guidelin.es](https://sass-guidelin.es/) and
[stylelint-config-sass-guidelines](https://github.com/bjankord/stylelint-config-sass-guidelines).

## Installation

```console
$ npm install --save @wearewondrous/stylelint-config
```

## Usage

Set your stylelint config to:

```json
{
  "extends": "@wearewondrous/stylelint-config"
}
```

### Extending the config

Simply add a `"rules"` key to your config and add your overrides there.

For example, to change the `indentation` to tabs and turn off the `number-leading-zero` rule:

```json
{
  "extends": "@wearewondrous/stylelint-config",
  "rules": {
    "indentation": "tab",
    "number-leading-zero": null
  }
}
```

## Creator

[WONDROUS](https://www.wearewondrous.com/)

## [License](LICENSE)
