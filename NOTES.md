# 交付說明 — AI Auto Video Cut（AI Auto Video Edit）Prototype v1

日期：2026-10-06
基底：AI Video Repair 頁面最新的設計系統（Header／手機版 header、Steps 手機版排版、zig-zag、FAQ、Footer）
內容來源：`https://yce-stage.perfectcorp.com/product-preview?cmsId=457&pageKey=ai-auto-video-cut`（正式站文案，2026-10-06 逐字擷取）

> 這是新的資料夾。舊的 `Product Page` 資料夾是同一個產品更早的版本（對應 GitHub `AI-Auto-Video-Cut`），這個資料夾是依最新正式站文案重做的。

## 頁面結構

Header → Topbanner → Intro（標題＋副標，下面 2 個功能重點：Smart Scene Selection／No Timeline Editor Needed，左右交錯）→ How to Use（5 步）→ Beyond Editing（Zig-zag ×3）→ Why Use YouCam AI Auto Video Edit（Zig-zag ×3）→ FAQ（6 則）→ Footer。

## 素材

已放入（來源 `~/Downloads/AI Auto Video Edit/`，2026-10-12）：

| 區塊 | 檔案 | 來源 | 備註 |
|---|---|---|---|
| Beyond Editing 03 Auto Captions, Music & Reformatting | `assets/page/video/auto-captions-music.mp4`（+ 同檔名 `.jpg` 靜態圖當 poster） | `youcam-ai-video-generator-20261012145515.mp4`（10/12 14:55 新版，1662×1246、5 秒；取代 08:37 舊版） | ffmpeg crf 28 壓縮，13.4MB → 1.23MB；內容是咖啡師影片加字幕、音樂，最後轉成 16:9／9:16／1:1，對應這一列 |
| Beyond Editing 02 Auto Voice-Over | `assets/page/img/auto-voice-over.jpg` | `Auto Voice-Over.jpg`（1200×848） | `Auto Voice-Over.jpg`（10/13 10:51 最新版）；JPG q80 壓縮，→ 87KB（頭像加名字 Amy／Jason／Sophie、淺藍線框）；依檔名對應這一列 |
| Beyond Editing 01 Style Presets | `assets/page/video/style-presets.mp4`（+ 同檔名 `.jpg` poster） | `Elegant lavender rose garden portrait-1.aep_AME/Style Presets_1.mp4`（10/13 11:49，AE 製作，1200×848、12.33 秒；前 9 秒與 11:41 版相同，結尾改短） | ffmpeg crf 30（維持在 2.5MB 目標內），16.0MB → 2.14MB；白底，比例剛好符合版位；內容是玫瑰花園人像影片，下方切換 Daily Vlog／General／Travel Memo／Must-Visit 四種風格，字幕和標題風格隨之改變 |
| Why Use 03 Stream Highlights | `assets/page/video/stream-highlights.mp4`（+ 同檔名 `.jpg` poster） | `~/Downloads/Highlights footage-2.mp4`（10/13 10:05，1662×1246、5 秒） | crf 28，18.1MB → 1.67MB；內容：Podcast 錄影自動剪出重點→Ready to share。主管選定第二個版本，另一個（`Highlights footage-1.mp4`，1920×1080、10 秒）已移除 |
| Why Use 01 Social KOLs | `assets/page/video/social-kols.mp4`（+ 同檔名 `.jpg` poster） | `Elegant lavender rose garden portrait-1.aep_AME/Social KOLs_2.mp4`（10/13 14:02，AE 重做，1200×848、7.96 秒；取代 10/12 `youcam-ai-video-generator-…160820` 版本） | ffmpeg crf 28，10.3MB → 0.98MB；內容：健身創作者拍攝→選片→Generate→成品→「Ready to Post」發佈到 IG／TikTok／YouTube；淺藍底，比例剛好符合版位 |
| Why Use 02 From Scattered Travel Clips | （先拿掉，回到佔位框） | 10/13 起暫時移除；先前版本是 `youcam-ai-video-generator-20261012161937.mp4` | 檔案已從專案刪除，需要時可從 git 歷史或 `~/Downloads/AI Auto Video Edit/` 取回 |
| Intro 功能 1 Smart Scene Selection | （先拿掉，回到佔位框） | 10/13 起暫時移除；先前版本是 `Smart Scene Selection_1.mp4`（AE，15:27，黑邊已修） | 檔案已從專案刪除，需要時可從 git 歷史（commit a63685c 之前）或原始 AME 資料夾取回 |
| Intro 功能 2 No Timeline Editor Needed | `assets/page/video/no-timeline-editor.mp4`（+ 同檔名 `.jpg` poster） | `Elegant lavender rose garden portrait-1.aep_AME/No Timeline Editor 2.mp4`（10/13 10:02，AE 重做，1200×848、6.27 秒；取代 10/12 的 `youcam-ai-video-generator-…083733`／`47918356…` 版本） | ffmpeg crf 28，8.7MB → 0.88MB；內容：加入照片→輸入描述→Generating…→成品（小狗）→下載；淺藍底 `#E4F5FF`，比例剛好符合版位；**沒有套用亮度調整** |
| Step 1 Import your media | `assets/page/step/step01.png` | `New Folder With Items/Travel Photo Cards with Upload Button-1.png`（第二組，無卡片底、透明背景；上一組已換掉） | 1254×1254 → 300×300，pngquant，30KB；檔名編號和步驟順序不一致，依內容對應（上傳按鈕＝Step 1） |
| Step 2 Describe your video, or pick a style | `assets/page/step/step02.png` | `Mediterranean Coast Photo Selector-1.png` | 24KB；畫面是提示輸入框＋風格縮圖選擇 |
| Step 3 Add a voice-over | `assets/page/step/step03.png` | `Blue microphone voice-selection card-3.png` | 18KB |
| Step 4 Adjust your video settings | `assets/page/step/step04.png` | `Minimal 16_9 settings tiles-4.png` | 14KB |
| Step 5 Generate and download | `assets/page/step/step05.png` | `Tropical bay video thumbnail-5.png` | 32KB |

其餘**影片／圖片仍是虛線佔位框**，還沒有素材：Topbanner、Intro 兩個功能示範、Step 1–5 圖、兩組 zig-zag 共 6 個示範。素材到位後告訴我，我會對應放入。

## 正式站文案上目前的問題（我依原文呈現，沒有擅自改寫，請確認是否要請 CMS 修）

1. **Smart Scene Selection 沒有說明文字**：正式站目前只有標題＋按鈕，之前版本有的那段說明（Drop in dozens of unsorted clips…）已經不在了。頁面上這個功能目前也只有標題。
2. **第 2 組 Why Use 第 2 列的按鈕寫成 `Try It Nwo`**（錯字）。我頁面上寫成 `Try It Now`。
3. **第 2 組 Why Use 第 3 列（Hours of Stream Footage）正式站沒有任何按鈕**，我照原樣沒放按鈕。
4. 產品名稱混用：H1 與 FAQ 標題是「AI Auto Video **Edit**」，FAQ 第 5 題答案裡寫「Auto Video **Cut**」，zig-zag 標題是「AI Auto Edit」，依各處原文逐字照抄。
5. Auto Voice-Over 那段原文有「record a single word— or just…」（破折號前沒有空格），照抄。

## 前端互動範圍

- CTA 按鈕只做前端 hover 效果，未串接。
- FAQ 手風琴、漢堡選單、語言切換已做互動。

## Git / 上線狀態

本機 git，**尚未建立 GitHub repo、尚未 push**。
