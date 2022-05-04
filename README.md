# Qin Todo J2　(useContext使用)

（こちらのリポジトリは個人開発用でチームとは別です。）

## チームのリポジトリ

https://github.com/london-newyork/Qin_Todo_J2

## 完成動画

[![Image from Gyazo](https://i.gyazo.com/92dfed2ee384b1eee733bedec63c8d45.gif)](https://gyazo.com/92dfed2ee384b1eee733bedec63c8d45)

[![Image from Gyazo](https://i.gyazo.com/435835fa630070b78b36ec70e3ff0a54.gif)](https://gyazo.com/435835fa630070b78b36ec70e3ff0a54)

## 概要

- TodoリストのCRUD処理+複製機能、見た目上の完了処理をuseStateとuseContextを使って実現した。
- 途中よりチーム開発と並行し、個人開発も進める。
  チームは useState で状態管理をし、それとは別に、この個人開発リポジトリでは useContextを試した。
- useContext該当箇所はラジオボタンとタスクに横線が引かれ、見た目上の完了となる部分。

## メンバー　（4名、このリポジトリでは途中からわたしの個人開発）

- geya
- yamataso
- ikk2kk
- london-newyork(途中個人開発)

※チーム開発時は
それぞれのメンバーが、週替わりでリーダーおよびレビュアーを担当。
Issue も特定のメンバーではなく、全員が切る経験をした。

## 使用技術

- フロントエンド

  - TypeScript
  - Next.js
  - Tailwind CSS

- 状態管理

<Try1>
- useState
- useContext

## 推奨 VScode 拡張機能

- ES7 + React/Redux/React-Native sippets
- Code Spell Checker
- Auto Rename Tag
- Bracket Pair Colorzier2
- Color Highlight
- Git Graph コミットの一覧 → 詳細を閲覧できる
- Git History ファイルの履歴などを確認できる
- Todo Tree
- GitLens

## バージョン情報

volta 　(v1.0.5)使用

```
    Node: v14.19.0
    Yarn: v1.22.17
```

`volta list`でプロジェクトにインストールされたバージョンを確認できます。

## 目的と概要

- Todo リストを、興味のある技術を使って、スマートホン用アプリ・デスクトップ用のアプリをレスポンシブで作成する。
- チーム開発を学ぶ。
  - それぞれのメンバーが、週替わりでリーダーおよびレビュアーを担当して、実務などに生かす。
  - Issue も特定のメンバーではなく、全員が切る経験をする。
  - チームでの GitHub の使い方を学ぶ。

## 環境構築手順

1. `git clone リポジトリURL`
2. リポジトリのディレクトリへ移動
3. `yarn` // package がインストールされる。
4. `yarn dev `
   上記を実行し、`http://localhost:3000/`

##　エラー回避方法

- `git pull` した時に、node_modules のエラーでパッケージが入っていないとメッセージがあった場合は、`yarn`をしてみる。

#### ブランチ命名規則

issue 番号を必ず含める

`git checkout -b #22-Install-Recoil`

#### コミットメッセージ

#issue 番号 + 日本語

ex:　　#22 状態管理ライブラリに Recoil をインストールした
