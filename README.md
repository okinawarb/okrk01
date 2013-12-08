okrk01
======
[沖縄Ruby会議01](https://okinawarb.github.io/okrk01/)のレポジトリです。

## 実行方法
```
bundle install
bundle exec middleman server
```

## デプロイ方法

`実行方法` を参考にして、`/source` 以下の HTML/CSS ファイル等を変更/修正し
終わったら、次の方法でデプロイします。

```
git add -A
git commit -m "デザインを修正"   # コミットメッセージは例です
git push origin master
bundle exec middleman build
bundle exec middleman deploy
```

TODO: `GitHub WebHook` -> `Travis CI` -> `GitHub Pages` という流れでデプロイを自動化する。

- cf. [okinawarb/okrk01- Travis CI](https://travis-ci.org/okinawarb/okrk01)

## 参考リポジトリ

[http://github.com/chuork/chuork01](http://github.com/chuork/chuork01)



