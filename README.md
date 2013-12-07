okrk01
======
[沖縄Ruby会議01](https://okinawarb.github.io/okrk01/)のレポジトリです。

## 実行
```
bundle install
bundle exec middleman server
```

## デプロイ方法

```
# e.g. /source 以下のHTML/CSSファイル等を変更する。
git add -A
git commit -m "デザインを修正"
git push origin master
# GitHub -> Travis -> GitHub Pages という流れで自動的にデプロイされます。
```

- cf. [okinawarb/okrk01- Travis CI](https://travis-ci.org/okinawarb/okrk01)

## 参考リポジトリ

[http://github.com/chuork/chuork01](http://github.com/chuork/chuork01)



