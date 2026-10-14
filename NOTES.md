# 交付說明 — AI Auto Video Cut（AI Auto Video Edit）Prototype v1

日期：2026-10-06
基底：AI Video Repair 頁面最新的設計系統（Header／手機版 header、Steps 手機版排版、zig-zag、FAQ、Footer）
內容來源：`https://yce-stage.perfectcorp.com/product-preview?cmsId=473&pageKey=ai-auto-video-cut`（正式站文案，2026-10-14 重新同步；先前為 2026-10-13 下午版）

> 這是新的資料夾。舊的 `Product Page` 資料夾是同一個產品更早的版本（對應 GitHub `AI-Auto-Video-Cut`），這個資料夾是依最新正式站文案重做的。

## 頁面結構

Header → Topbanner → Intro（標題＋副標，下面 2 個功能重點：Smart Scene Selection／No Timeline Editor Needed，左右交錯）→ How to Use（5 步）→ Beyond Editing（Zig-zag ×3）→ Why Use YouCam AI Auto Video Edit（Zig-zag ×2：Social KOLs、From Travel Clips）→ FAQ（6 則）→ Footer。

## 素材

已放入（來源 `~/Downloads/AI Auto Video Edit/`，2026-10-12）：

| 區塊 | 檔案 | 來源 | 備註 |
|---|---|---|---|
| Beyond Editing 03 Auto Captions, Music & Reformatting | `assets/page/video/auto-captions-music.mp4`（+ 同檔名 `.jpg` 靜態圖當 poster） | `youcam-ai-video-generator-20261012145515.mp4`（10/12 14:55 新版，1662×1246、5 秒；取代 08:37 舊版） | ffmpeg crf 28 壓縮，13.4MB → 1.23MB；內容是咖啡師影片加字幕、音樂，最後轉成 16:9／9:16／1:1，對應這一列 |
| Beyond Editing 02 Auto Voice-Over | `assets/page/img/auto-voice-over.jpg` | `Auto Voice-Over.jpg`（1200×848） | `Auto Voice-Over.jpg`（10/13 10:51 最新版）；JPG q80 壓縮，→ 87KB（頭像加名字 Amy／Jason／Sophie、淺藍線框）；依檔名對應這一列 |
| Beyond Editing 01 Style Presets | `assets/page/video/style-presets.mp4`（+ 同檔名 `.jpg` poster） | `Elegant lavender rose garden portrait-1.aep_AME/Style Presets_2.mp4`（10/13 15:42，AE 製作，1200×848、11.58 秒；前 4 秒與先前版本相同，後段與結尾有調整） | ffmpeg crf 30（維持在 2.5MB 目標內），15.0MB → 2.04MB；白底，比例剛好符合版位；內容是玫瑰花園人像影片，下方切換 Daily Vlog／General／Travel Memo／Must-Visit 四種風格，字幕和標題風格隨之改變 |
| Why Use 03 Stream Highlights | `assets/page/video/stream-highlights.mp4`（+ 同檔名 `.jpg` poster） | `~/Downloads/Highlights footage-2.mp4`（10/13 10:05，1662×1246、5 秒） | crf 28，18.1MB → 1.67MB；內容：Podcast 錄影自動剪出重點→Ready to share。主管選定第二個版本，另一個（`Highlights footage-1.mp4`，1920×1080、10 秒）已移除 |
| Why Use 01 Social KOLs | `assets/page/video/social-kols.mp4`（+ 同檔名 `.jpg` poster） | `Elegant lavender rose garden portrait-1.aep_AME/Social KOLs.mp4`（10/13 16:17，AE 重做，1200×848、7.96 秒；取代 10/12 `youcam-ai-video-generator-…160820` 版本） | ffmpeg crf 28，10.3MB → 0.98MB；內容：健身創作者拍攝→選片→Generate→成品→「Ready to Post」發佈到 IG／TikTok／YouTube；淺藍底，比例剛好符合版位 |
| Why Use 02 From Travel Clips（**已隱藏**） | `assets/page/video/travel-clips.mp4`（+ `.jpg`，檔案保留） | `youcam-ai-video-generator-20261012161937.mp4`（10/12 16:19，1820×1138、5 秒） | 10/13 因 marcom 可能刪除這一區，先在 index.html 用註解包起來隱藏（不會載入影片）；Why Use 剩兩列，編號改為 01/02、02/02。**要加回**：移除註解 `<!-- HIDDEN … -->` 外框，並把 Why Use 編號改回 01/03、02/03、03/03，且移除 Stream Highlights 列上的 `zigzag__row--reverse`（目前隱藏後 Why Use 剩兩列，第 2 列為圖左文右，維持左右交錯） |
| Topbanner | `assets/page/video/top-banner.mp4`（+ 同檔名 `.jpg` poster） | `Elegant lavender rose garden portrait-1.aep_AME/top-banner_2.mp4`（10/13 18:08，AE，2880×1254、10.96 秒；背景為生日派對場景；17:57 的 `top-banner.mp4` 為同背景較早版，17:51 的 `top-banner_1.mp4` 為淺色空房間背景版） | ffmpeg crf 28，13.2MB → 2.63MB；人物內容在左側、右側是明亮空間給文字（文字維持深色）；≤1024px 改用 `top-banner-mobile.mp4`：從桌機影片卡片內側裁出 3:2 滿版（卡片白邊與圓角已避開，828×552），由 script.js 依視窗寬度切換；先前版本「Describe Your Video Idea」那格的亂碼文字已在這版修掉（現為 "Create a joyful birthday highlights video with cheerful music and warm subtitles"） |
| Intro 功能 1 One Upload. Endless Eye-Catching Looks. | `assets/page/video/one-upload.mp4`（+ 同檔名 `.jpg` poster） | `~/Downloads/youcam-ai-video-generator-20261013180857.mp4`（10/13 18:08，1662×1246、10 秒；取代先前的 Smart Scene Selection 影片） | ffmpeg crf 28，28.9MB → 2.65MB；內容：「One Upload — Photos + Videos」上傳框→一次選取多張照片與影片→合成成品影片，與文案「Photos, videos, or both」對應；比版位稍高，上下各裁約 3% |
| Intro 功能 2 No Timeline Editor Needed | `assets/page/video/no-timeline-editor.mp4`（+ 同檔名 `.jpg` poster） | `Elegant lavender rose garden portrait-1.aep_AME/No Timeline Editor 2_1.mp4`（10/13 10:16，AE 重做，1200×848、6.27 秒；取代 10/12 的 `youcam-ai-video-generator-…083733`／`47918356…` 版本） | ffmpeg crf 28，8.7MB → 0.88MB；內容：加入照片→輸入描述→Generating…→成品（小狗）→下載；淺藍底 `#E4F5FF`，比例剛好符合版位；**沒有套用亮度調整** |
| Step 1 Import your media | `assets/page/step/step01.png` | `New Folder With Items/Travel Photo Cards with Upload Button-1.png`（第二組，無卡片底、透明背景；上一組已換掉） | 1254×1254 → 300×300，pngquant，30KB；檔名編號和步驟順序不一致，依內容對應（上傳按鈕＝Step 1） |
| Step 2 Describe your video, or pick a style | `assets/page/step/step02.png` | `Mediterranean Coast Photo Selector-1.png` | 24KB；畫面是提示輸入框＋風格縮圖選擇 |
| Step 3 Add a voice-over | `assets/page/step/step03.png` | `Blue microphone voice-selection card-3.png` | 18KB |
| Step 4 Adjust your video settings | `assets/page/step/step04.png` | `Minimal 16_9 settings tiles-4.png` | 14KB |
| Step 5 Generate and download | `assets/page/step/step05.png` | `Tropical bay video thumbnail-5.png` | 32KB |

其餘**影片／圖片仍是虛線佔位框**，還沒有素材：Topbanner、Intro 兩個功能示範、Step 1–5 圖、兩組 zig-zag 共 6 個示範。素材到位後告訴我，我會對應放入。

## 2026-10-14 同步（cmsId=473，相對 10/13 下午版的變更）

1. Topbanner 說明改為「With just one upload, AI automatically turns your photos and videos into eye-catching videos in any style—from daily vlogs to travel memos, with zero effort.」
2. Intro 功能 1 標題改為「One Upload. AI Does the Rest」；說明開頭改為「Upload photos, videos, or both;」，結尾「Every new look」改為「Every step」。
3. Beyond Editing 第 1 列標題改為「Style Presets: Daily Vlog, Travel Memo & More」；Auto Voice-Over 圖片 alt 改為「Auto Voice-Over: Studio-Quality Narration」。
4. Why Use：正式站**恢復 Travel Clips、移除 Stream Highlights**（現為 01/02 Social KOLs、02/02 From Travel Clips）。本機已取消 Travel Clips 的註解隱藏；兩段 Stream Highlights（`stream-highlights.mp4`、`stream-highlights-a.mp4`）改用註解隱藏，素材檔保留。
5. 正式站圖片／影片目前全是 CMS 佔位圖（`YCO_Placeholder_…`），本機素材維持設計團隊提供的版本，未更動。
6. 正式站頁面最上方另有站台層級的活動橫幅（「Seedance 2.5 全新上線…」）與麵包屑（首頁 / AI Auto Video Edit），不屬於這個產品頁內容，本機未加入。

## 正式站文案（2026-10-13 下午版，已被上方 10/14 同步取代的部分以上方為準）

來源：`https://yce-stage.perfectcorp.com/product-preview?cmsId=473&pageKey=ai-auto-video-cut`。這頁在同一天內又改過一次，本機已逐行比對一致（只差麵包屑「Home」）。相對上午那版的變更：

1. Hero 說明改為「One upload, any style. AI automatically turns your photos and videos into eye-catching videos, from daily vlogs to travel memos, with zero effort.」
2. Intro 標題改為「Skip the Editor. Let AI Take You Straight to a Video That Shines.」，副標整段改寫（Leave the timeline behind…）。
3. Intro 功能 1 標題改為「One Upload. Endless Eye-Catching Looks.」，說明整段改寫；Intro 功能 2 標題改為「No Timeline Needed. Just Pro-Level Polish.」，說明整段改寫。
4. 步驟區：標題「How to Use AI Auto Edit? From Upload to Finished Video in 5 Steps」，副標「5 quick steps between your raw footage and a video worth sharing.」；Step 2 改為「Pick a style, or describe your video」並改寫說明。
5. Beyond Editing：大標題「Beyond Editing. 3 AI Features That Turn Raw Moments Into Showpieces」，第 1 列標題「Style Presets: One Upload, Many Looks」並改寫說明。
6. Why Use：**正式站已刪除 Travel Clips 那一列**（只剩 Social KOLs、Hours of Stream Footage 兩列，錯字 `Try It Nwo` 也隨之消失）。本機該列仍用註解隱藏保留。

仍留在正式站上的問題（我依原文呈現，請確認是否請 CMS 修）：

1. 產品名稱混用：H1 與 FAQ 標題是「AI Auto Video **Edit**」，FAQ 第 5 題答案裡寫「Auto Video **Cut**」。
2. Auto Voice-Over 那段原文有「record a single word— or just…」（破折號前沒有空格），照抄。

## 前端互動範圍

- CTA 按鈕只做前端 hover 效果，未串接。
- FAQ 手風琴、漢堡選單、語言切換已做互動。

## Git / 上線狀態

本機 git，**尚未建立 GitHub repo、尚未 push**。
