# 交付說明 — AI Auto Video Cut Prototype v1

日期：2026-09-21
基底：沿用先前 AI Character Motion Swap 頁面的設計系統（tokens、Header/Footer、按鈕、FAQ 手風琴、Zig-zag 區塊樣式）
內容來源：`https://yce-stage.perfectcorp.com/product-preview?cmsId=457&pageKey=ai-auto-video-cut`（正式站文案，逐字擷取）

## 這次涵蓋範圍

整頁：Header → Topbanner → How It Works（單一功能介紹）→ Create a Finished Video in 5 Steps → Every Step, Automated（Zig-zag圖文交錯 ×3）→ FAQ（8則手風琴）→ Footer。
三個斷點沿用 Motion Swap 頁面已驗證過的 Desktop／Tablet／Mobile 規則。

## ⚠️ 缺少的素材（目前全部用虛線佔位框代替）

這次沒有拿到 AI Auto Video Cut 的實際影片/圖片，以下全部是 `media-placeholder` 佔位框：

| 位置 | 狀態 |
| --- | --- |
| Topbanner（Hero） | 佔位框，文字目前用**深色字**（因為佔位框背景偏淺色）；正式影片如果是深色背景，記得把 `.topbanner__content` 改回加上 `is-light-text` |
| How It Works 功能示範影片 | 佔位框 |
| Step 1–5 縮圖 | 佔位框 |
| Style Presets／AI Voice-Over／Captions & Music 三組示範素材 | 佔位框 |

素材到位後，麻煩告訴我對應檔名/位置，我再把佔位框換成真實 `<video>`／`<img>`。

## 跟原本 Motion Swap 頁面的結構差異

- **How to Use 步驟從 4 步改成 5 步**：`.steps` 改成 `flex-wrap + justify-content:center`、固定寬度 220px，5 個項目在桌機會自動排成 3+2 置中兩列，不用另外做 grid。
- **Intro 區塊原本是 4 項條列（bullet list），這頁正式站對應位置只有一個單一功能重點（Smart Scene Selection）**，所以改用「小標題 + 說明文字」取代條列，新增了 `.intro__feature-title` / `.intro__feature-desc` 兩個 class。
- **Steps 標題、Zig-zag 標題下方新增了一行副標**（`.steps-sub` / `.zigzag-sub`），因為正式站這兩個區塊原文都有一句導言，Motion Swap 頁面原本沒有這個位置。
- 移除了 Motion Swap 頁面留下的 Topbanner Option A/B 切換 UI（review-only，這頁用不到），對應的 CSS／JS 也一併清掉。
- 刪除了 `assets/page/` 底下 Motion Swap 專用的影片/圖片素材（跟這頁無關），`assets/YCO/`（Header/Footer 共用素材）保留。

## 本次依循的規則來源

沿用 Motion Swap 頁面的設計 tokens／按鈕/FAQ/Zig-zag 規則（見 style.css 內註解），這次沒有拿到 Figma 設計稿，版面配置是依「正式站文案結構」+「Motion Swap 頁面既有的視覺系統」推導出來的，**不是照專屬設計稿還原**，如果之後有這頁的 Figma 稿，麻煩提供，我再依實際稿調整。

## 前端互動範圍

- CTA 按鈕只做前端 hover 效果，未串接下一步功能。
- FAQ 手風琴、漢堡選單、語言切換按鈕已做前端展開/收合互動。

## 檔案結構

```
index.html
style.css
script.js
assets/YCO/icons/   （沿用 workspace 既有固定素材）
assets/YCO/logos/   （沿用 workspace 既有固定素材）
```
