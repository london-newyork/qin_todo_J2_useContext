# Qin Todo J2
（こちらのリポジトリは個人開発用でチームとは別です。）

## チームのリポジトリ
https://github.com/london-newyork/Qin_Todo_J2

## 概要
* 途中よりチーム開発と並行し、個人開発も進める。
チームはuseStateで状態管理をし、この個人開発リポジトリではuseContextを試してからGraphQLを使用する。

## メンバー　（4 名）

- geya
- yamataso
- ikk2kk
- london-newyork

それぞれのメンバーが、週替わりでリーダーおよびレビュアーを担当する。
Issue も特定のメンバーではなく、全員が切る経験をする。

## 使用技術

- フロントエンド

  - TypeScript
  - Next.js
  - Tailwind CSS

- 状態管理

<Try1>
- useState
- useContext

<Try2>
- Appollo(GraphQL)
- Hasura

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
