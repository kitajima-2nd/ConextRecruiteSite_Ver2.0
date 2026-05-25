# サッカーボール型コンポーネントの位置調整ガイド

## 概要

このコンポーネントは正五角形（12個）と正六角形（20個）を組み合わせたサッカーボール型の3Dオブジェクトです。

**注意**: ローテーション（回転）アニメーションはCSSではなく、motionライブラリで実装されています。CSSファイルにはアニメーション定義は含まれていません。

## 基本的な構造

各面は以下の`transform`プロパティで配置されています：

```css
transform: rotateY(角度) rotateX(角度) translateZ(距離) rotateZ(角度);
```

## 各プロパティの意味

### 1. `rotateY(角度)` - 水平方向の回転
- **意味**: Y軸（上下軸）を中心に回転
- **効果**: 左右の位置を変更
- **範囲**: 0deg ～ 360deg
- **例**: 
  - `rotateY(0deg)` → 正面
  - `rotateY(90deg)` → 右側
  - `rotateY(180deg)` → 背面
  - `rotateY(270deg)` → 左側

### 2. `rotateX(角度)` - 垂直方向の回転
- **意味**: X軸（左右軸）を中心に回転
- **効果**: 上下の位置を変更
- **範囲**: -90deg ～ 90deg
- **例**:
  - `rotateX(-90deg)` → 真上
  - `rotateX(0deg)` → 水平（正面）
  - `rotateX(90deg)` → 真下

### 3. `translateZ(距離)` - 前後方向の移動
- **意味**: Z軸方向（前後）に移動
- **効果**: 球体の中心からの距離を変更
- **値**: 
  - `calc(var(--soccer-ball-size) * 0.8)` → 球体の表面に近い
  - `calc(var(--soccer-ball-size) * 0.9)` → 球体の表面から少し外側
  - `calc(var(--soccer-ball-size) * 1.0)` → 球体の表面からさらに外側

### 4. `rotateZ(角度)` - 面自体の回転（オプション）
- **意味**: 面自体を回転させる
- **効果**: 面の向きを変更
- **使用例**: 上下を反転させたい場合に`rotateZ(180deg)`を使用

## 調整の手順

### ステップ1: どの面を調整するか決める
- 正五角形: `.pentagon1` ～ `.pentagon12`
- 正六角形: `.hexagon1` ～ `.hexagon20`

### ステップ2: 調整したい方向を決める

#### 左右の位置を変えたい場合
```css
.pentagon1 {
  transform: rotateY(30deg) /* ← この値を変更 */ rotateX(-90deg) translateZ(...);
}
```

#### 上下の位置を変えたい場合
```css
.pentagon1 {
  transform: rotateY(0deg) rotateX(-60deg) /* ← この値を変更 */ translateZ(...);
}
```

#### 中心からの距離を変えたい場合
```css
.pentagon1 {
  transform: rotateY(0deg) rotateX(-90deg) translateZ(calc(var(--soccer-ball-size) * 0.9)) /* ← この値を変更 */;
}
```

### ステップ3: 少しずつ調整する
- 一度に大きく変えず、5度～10度ずつ調整
- ブラウザで確認しながら調整

## 実践例

### 例1: 正五角形1を右側に移動
```css
.pentagon1 {
  /* 変更前 */
  transform: rotateY(0deg) rotateX(-90deg) translateZ(calc(var(--soccer-ball-size) * 0.85));
  
  /* 変更後（右に30度移動） */
  transform: rotateY(30deg) rotateX(-90deg) translateZ(calc(var(--soccer-ball-size) * 0.85));
}
```

### 例2: 正六角形1を上に移動
```css
.hexagon1 {
  /* 変更前 */
  transform: rotateY(0deg) rotateX(0deg) translateZ(calc(var(--soccer-ball-size) * 0.8));
  
  /* 変更後（上に30度移動） */
  transform: rotateY(0deg) rotateX(-30deg) translateZ(calc(var(--soccer-ball-size) * 0.8));
}
```

### 例3: 正五角形1を外側に移動
```css
.pentagon1 {
  /* 変更前 */
  transform: rotateY(0deg) rotateX(-90deg) translateZ(calc(var(--soccer-ball-size) * 0.85));
  
  /* 変更後（外側に移動） */
  transform: rotateY(0deg) rotateX(-90deg) translateZ(calc(var(--soccer-ball-size) * 0.95));
}
```

## 便利な調整テクニック

### 1. グループで調整する
同じ位置にある面は、同じ角度を使うと整列します：
```css
.pentagon1 { transform: rotateY(0deg) rotateX(-90deg) translateZ(...); }
.pentagon2 { transform: rotateY(72deg) rotateX(-90deg) translateZ(...); }
.pentagon3 { transform: rotateY(144deg) rotateX(-90deg) translateZ(...); }
/* rotateXの値が同じなので、同じ高さに配置される */
```

### 2. 対称的に配置する
```css
/* 上面 */
.pentagon1 { transform: rotateY(0deg) rotateX(-90deg) translateZ(...); }
/* 下面（上下対称） */
.pentagon11 { transform: rotateY(0deg) rotateX(90deg) translateZ(...) rotateZ(180deg); }
```

### 3. デバッグ用に一時的に大きくする
調整中は`translateZ`の値を大きくして、位置を確認しやすくします：
```css
.pentagon1 {
  transform: rotateY(0deg) rotateX(-90deg) translateZ(calc(var(--soccer-ball-size) * 1.5));
  /* 調整後、元の値に戻す */
}
```

## 注意点

1. **順序が重要**: `rotateY` → `rotateX` → `translateZ` の順序で適用されます
2. **角度の範囲**: `rotateX`は-90deg～90degが一般的です
3. **距離の調整**: `translateZ`の値が大きすぎると、面が離れすぎて見えなくなります
4. **回転の中心**: すべての面は`.solid`の中心（50% 50% 0）を基準に配置されます
5. **ローテーション**: コンポーネント全体の回転はmotionライブラリで実装されています。CSSファイルにはアニメーション定義は含まれていません

## ローテーションについて

コンポーネント全体の回転アニメーションは、motionライブラリを使用して`.view`要素に適用されます。CSSファイルには`@keyframes`や`animation`プロパティは含まれていません。

motionで実装する場合の例：
```tsx
import { motion } from "motion/react";

<motion.div 
  className={styles.view}
  animate={{ 
    rotateY: 360,
    rotateX: 360 
  }}
  transition={{ 
    duration: 15, 
    repeat: Infinity, 
    ease: "linear" 
  }}
>
  {/* コンテンツ */}
</motion.div>
```

