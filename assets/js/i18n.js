/*!
 * PleasureLab · i18n dictionary
 * Supported locales: en (English), ja (日本語), zh-Hant (繁體中文)
 * Attached to window so the site works without a build step or module server.
 */
(function (global) {
  'use strict';

  var DICT = {
    /* ------------------------------------------------------------------ */
    /* English                                                             */
    /* ------------------------------------------------------------------ */
    en: {
      meta: {
        htmlLang: 'en',
        dir: 'ltr',
        name: 'English',
        homeTitle: 'PleasureLab — Evidence-based intimacy education',
        homeDesc:
          'PleasureLab is a private, science-backed app for learning about sexual wellness, intimacy and healthy relationships.',
        supportTitle: 'Support Center — PleasureLab',
        supportDesc:
          'Submit a product suggestion, request a refund, or cancel your subscription. The PleasureLab team replies within 2 business days.'
      },
      common: {
        brand: 'PleasureLab',
        language: 'Language',
        theme: 'Theme',
        themeLight: 'Light',
        themeDark: 'Dark',
        themeSystem: 'System',
        required: 'Required',
        optional: 'Optional',
        yes: 'Yes',
        no: 'No',
        backHome: 'Back to home',
        skipToContent: 'Skip to content'
      },
      nav: {
        features: 'Features',
        how: 'How it works',
        privacy: 'Privacy',
        faq: 'FAQ',
        support: 'Support Center',
        supportShort: 'Support',
        cta: 'Get the app'
      },
      hero: {
        eyebrow: 'Intimacy education, done properly',
        title: 'Learn about your body, your partner and your relationship.',
        subtitle:
          'PleasureLab turns peer-reviewed sexual health research into short, judgement-free lessons — plus couple exercises, an anonymous Q&A and a privacy-first design that keeps everything on your side.',
        ctaPrimary: 'Get the app',
        ctaSecondary: 'Visit the Support Center',
        note: 'For adults 18+. No ads. No data sold. Ever.',
        stat1Value: '400+',
        stat1Label: 'Lessons reviewed by clinicians',
        stat2Value: '3',
        stat2Label: 'Languages supported',
        stat3Value: '0',
        stat3Label: 'Trackers or ad SDKs'
      },
      features: {
        title: 'What is inside',
        subtitle: 'Six things PleasureLab does better than a search engine at 2 a.m.',
        f1Title: 'A science-backed library',
        f1Body:
          'Anatomy, consent, contraception, desire, ageing, health conditions. Every article cites its sources and shows when it was last reviewed.',
        f2Title: 'Courses that fit real life',
        f2Body:
          'Five-minute lessons that build into structured programmes — communication, mismatched libido, pain-free intimacy, post-partum recovery.',
        f3Title: 'Exercises for couples',
        f3Body:
          'Guided conversation cards and paced exercises you work through together, with a shared progress view that both partners opt into.',
        f4Title: 'Anonymous Q&A',
        f4Body:
          'Ask what you would never ask out loud. Questions are stripped of identifying data before an educator or clinician answers.',
        f5Title: 'Relationship check-ins',
        f5Body:
          'Short, validated self-assessments that track satisfaction, communication and wellbeing over time — for you, not for a feed.',
        f6Title: 'Private by construction',
        f6Body:
          'App lock, a discreet icon and name, local-first storage, and an export-and-erase button that really erases.'
      },
      how: {
        title: 'How it works',
        subtitle: 'Three steps, about four minutes.',
        s1Title: 'Tell us what you want to work on',
        s1Body:
          'A short, skippable intake — no legal name, no phone number, no contacts permission.',
        s2Title: 'Get a plan you can actually finish',
        s2Body:
          'PleasureLab assembles lessons and exercises around your goal and the time you have each week.',
        s3Title: 'Practise, review, adjust',
        s3Body:
          'Check in when it suits you. The plan re-sequences itself around what you found useful.'
      },
      privacy: {
        title: 'Privacy is the product',
        body:
          'An app about your sex life has to earn trust before it earns anything else. That is why PleasureLab is built to know as little about you as possible.',
        p1: 'No third-party analytics, advertising SDKs or cross-app trackers.',
        p2: 'Your content stays on the device by default; cloud sync is opt-in and end-to-end encrypted.',
        p3: 'A discreet app icon and name, plus biometric or passcode lock on launch.',
        p4: 'Delete your account from inside the app — data is purged within 30 days, backups included.',
        note: 'PleasureLab is educational and is not a substitute for medical care. If something hurts or worries you, please see a clinician.'
      },
      faq: {
        title: 'Frequently asked questions',
        q1: 'Is PleasureLab suitable for me if I am single?',
        a1: 'Yes. Roughly half the library is written for solo readers — anatomy, health, desire, body image and self-knowledge. Couple exercises are a separate, optional section.',
        q2: 'Is the content explicit?',
        a2: 'It is frank and anatomically accurate, illustrated with medical-style diagrams rather than photography. The app is rated for adults 18 and over.',
        q3: 'How much does it cost?',
        a3: 'A substantial part of the library is free. PleasureLab Plus unlocks the full course catalogue, couple exercises and unlimited anonymous questions, billed monthly or yearly.',
        q4: 'How do I cancel my subscription?',
        a4: 'Open the Support Center and submit a cancellation request, or cancel directly in the App Store or Google Play subscription settings. Both routes work.',
        q5: 'Can I get a refund?',
        a5: 'Yes — every charge is covered by a no-questions-asked refund for 30 days. Submit a refund request with your billing screenshot; refunds complete within 7 to 14 business days.',
        q6: 'Who writes the content?',
        a6: 'Sex educators, physiotherapists, GPs and psychologists. Every article shows its author, reviewer and review date.'
      },
      cta: {
        title: 'Start with one honest question.',
        body: 'PleasureLab is free to download. Nothing is shared until you decide it is.',
        button: 'Get the app',
        support: 'Need help instead?'
      },
      footer: {
        tagline: 'Evidence-based intimacy education for adults.',
        product: 'Product',
        company: 'Company',
        legal: 'Legal',
        features: 'Features',
        faq: 'FAQ',
        support: 'Support Center',
        contact: 'Contact us',
        privacyPolicy: 'Privacy policy',
        terms: 'Terms of service',
        rights: 'All rights reserved.',
        adult: 'Intended for adults aged 18 and over.'
      },

      /* ----------------------------- Support ---------------------------- */
      support: {
        eyebrow: 'Support Center',
        title: 'How can we help?',
        subtitle:
          'Pick a request type below. We reply to every ticket, in your language, within two business days.',
        slaTitle: 'Response time',
        slaBody: 'Within 2 business days',
        langTitle: 'Reply language',
        langBody: 'English, 日本語, 繁體中文',
        emailTitle: 'Prefer email?',
        emailBody: 'Write to us directly',

        tabSuggestion: 'Product suggestion',
        tabSuggestionHint: 'Ideas, feedback, bug reports',
        tabRefund: 'Refund request',
        tabRefundHint: 'Get a charge reversed',
        tabCancel: 'Cancel subscription',
        tabCancelHint: 'Stop future billing',

        /* shared field labels */
        name: 'Name or nickname',
        namePlaceholder: 'How should we address you?',
        email: 'Email address',
        emailPlaceholder: 'you@example.com',
        emailHelpOptional: 'Optional — but we can only reply if you leave one.',
        emailHelpRequired: 'Required. This must be the email used for the purchase.',
        message: 'Details',
        submit: 'Submit request',
        submitting: 'Submitting…',
        clear: 'Clear form',
        consentLabel:
          'I understand PleasureLab will process the information above to handle my request.',

        /* suggestion */
        sugIntro:
          'Tell us what would make PleasureLab better. Feature ideas, content gaps and bug reports all land in the same place — and are read by the people who build the app.',
        sugCategory: 'What is this about?',
        sugCatFeature: 'A feature idea',
        sugCatContent: 'Content or a lesson',
        sugCatBug: 'Something is broken',
        sugCatUx: 'Design or usability',
        sugCatOther: 'Something else',
        sugMessagePlaceholder:
          'Describe your idea or the problem. If it is a bug, tell us what you did and what happened.',
        sugDevice: 'Device and app version',
        sugDevicePlaceholder: 'e.g. iPhone 15, iOS 18.2, PleasureLab 3.4.1',

        /* refund */
        refIntro:
          'Every charge is covered by a no-questions-asked refund for 30 days — you do not have to justify it. We need your billing email and a screenshot of the charge so we can find the transaction.',
        refPlatform: 'Where did you pay?',
        refPlatformApple: 'App Store (Apple)',
        refPlatformGoogle: 'Google Play',
        refPlatformWeb: 'Our website (card)',
        refPlatformOther: 'Somewhere else',
        refOrderId: 'Order or transaction ID',
        refOrderPlaceholder: 'e.g. MT7X9K2QPL — found on your receipt',
        refAmount: 'Amount charged',
        refAmountPlaceholder: 'e.g. USD 59.99',
        refDate: 'Date of the charge',
        refReason: 'Why are you requesting a refund?',
        refReasonAccident: 'I did not mean to buy it',
        refReasonDuplicate: 'I was charged twice',
        refReasonUnauthorized: 'I did not authorise this charge',
        refReasonExpectation: 'The app is not what I expected',
        refReasonTechnical: 'Technical problems I could not resolve',
        refReasonOther: 'Another reason',
        refMessagePlaceholder: 'Anything else that helps us process this faster.',
        refNote:
          'Purchases made through the App Store or Google Play are refunded by the platform. We will confirm your eligibility and walk you through it — or file it on your behalf where the platform allows.',

        /* cancel */
        canIntro:
          'Cancelling stops all future charges, no questions asked. You keep PleasureLab Plus until the end of the period you have already paid for.',
        canPlan: 'Which plan are you on?',
        canPlanMonthly: 'Plus — monthly',
        canPlanYearly: 'Plus — yearly',
        canPlanTrial: 'Free trial',
        canPlanUnknown: 'I am not sure',
        canReason: 'Why are you leaving?',
        canReasonPrice: 'Too expensive',
        canReasonUsage: 'I do not use it enough',
        canReasonContent: 'The content was not right for me',
        canReasonTechnical: 'Technical problems',
        canReasonDone: 'I got what I came for',
        canReasonOther: 'Another reason',
        canMessagePlaceholder: 'Optional — but honest feedback genuinely changes what we build.',
        canNote:
          'You can also cancel yourself at any time in your App Store or Google Play subscription settings. Submitting this form is only necessary if that route does not work for you.',
        canDeleteLabel: 'Also delete my account and all my data',
        canDeleteHelp: 'This is permanent and cannot be undone.',

        /* upload */
        uploadLabel: 'Billing screenshot',
        uploadHelp:
          'Attach a screenshot of the receipt or charge showing the date, amount and order ID. JPG, PNG, WebP or HEIC, up to {max} MB.',
        uploadCta: 'Choose a file',
        uploadDrop: 'or drag it here',
        uploadReplace: 'Replace',
        uploadRemove: 'Remove',
        uploadRedactTip:
          'Tip: hide anything you do not want us to see — full card numbers, your home address. We only need the date, the amount and the order ID.',

        /* validation */
        errRequired: 'This field is required.',
        errEmail: 'Please enter a valid email address.',
        errConsent: 'Please confirm this to continue.',
        errFileRequired: 'Please attach your billing screenshot.',
        errFileType: 'That file type is not supported. Use JPG, PNG, WebP or HEIC.',
        errFileSize: 'That file is larger than {max} MB. Please attach a smaller screenshot.',
        errSummary: 'Please fix the highlighted fields and try again.',
        errNetwork:
          'We could not reach the support server. Your ticket has been prepared below so nothing is lost — send it by email, or try again in a moment.',

        /* success */
        okTitle: 'Thank you — your request is in.',
        okBodySuggestion:
          'A human reads every suggestion. If we need more detail, we will email you.',
        okBodyRefund:
          'We have everything we need. Nothing further is required from you.',
        okBodyCancel:
          'We have everything we need. Nothing further is required from you.',

        nextTitle: 'What happens next',
        nextRef1:
          'Your request qualifies. Every charge is refundable for 30 days, with no reason required — we will not ask you to justify it.',
        nextRef2:
          'The refund completes within 7 to 14 business days and returns to your original payment method. Your bank may take a further day or two to show it.',
        nextRef3:
          'There is nothing else to do. Please do not submit again — we will email you the moment it is done.',
        nextCan1:
          'Your cancellation is accepted. We do not ask for a reason and we will not try to talk you out of it.',
        nextCan2:
          'It completes within 7 to 14 business days, after which you will never be charged again. You keep PleasureLab Plus until the period you have paid for runs out.',
        nextCan3:
          'There is nothing else to do. Please do not submit again — we will email you the moment it is done.',
        okTicket: 'Your ticket reference',
        okCopy: 'Copy reference',
        okCopied: 'Copied',
        okAnother: 'Submit another request',

        /* offline fallback */
        fbTitle: 'Send this by email',
        fbBody:
          'Online submission is not configured for this site yet. Copy the summary below into an email to {email} and attach your screenshot.',
        fbCopy: 'Copy summary',
        fbCopied: 'Copied to clipboard',
        fbDownload: 'Download summary',
        fbMail: 'Open email app',
        fbAttach: 'Remember to attach the screenshot — email cannot carry it across automatically.'
      }
    },

    /* ------------------------------------------------------------------ */
    /* 日本語                                                              */
    /* ------------------------------------------------------------------ */
    ja: {
      meta: {
        htmlLang: 'ja',
        dir: 'ltr',
        name: '日本語',
        homeTitle: 'PleasureLab — エビデンスにもとづく性の学び',
        homeDesc:
          'PleasureLab は、性の健康・親密さ・パートナーシップを科学的な根拠にもとづいて学べる、プライバシー第一のアプリです。',
        supportTitle: 'サポートセンター — PleasureLab',
        supportDesc:
          '製品へのご提案、返金申請、サブスクリプションの解約を受け付けています。2 営業日以内にご返信します。'
      },
      common: {
        brand: 'PleasureLab',
        language: '言語',
        theme: 'テーマ',
        themeLight: 'ライト',
        themeDark: 'ダーク',
        themeSystem: '自動',
        required: '必須',
        optional: '任意',
        yes: 'はい',
        no: 'いいえ',
        backHome: 'ホームへ戻る',
        skipToContent: '本文へスキップ'
      },
      nav: {
        features: '機能',
        how: '使い方',
        privacy: 'プライバシー',
        faq: 'よくある質問',
        support: 'サポートセンター',
        supportShort: 'サポート',
        cta: 'アプリを入手'
      },
      hero: {
        eyebrow: '性の学びを、まっとうに',
        title: '自分のからだ、パートナー、そして関係について学ぶ。',
        subtitle:
          'PleasureLab は、査読済みの性の健康研究を、短くて否定しないレッスンに変えます。カップル向けのワーク、匿名の Q&A、そして情報をあなたの手元にとどめる設計。',
        ctaPrimary: 'アプリを入手',
        ctaSecondary: 'サポートセンターへ',
        note: '18 歳以上向け。広告なし。データの販売は一切ありません。',
        stat1Value: '400+',
        stat1Label: '専門家が監修した記事',
        stat2Value: '3',
        stat2Label: '対応言語',
        stat3Value: '0',
        stat3Label: 'トラッカー・広告 SDK'
      },
      features: {
        title: 'できること',
        subtitle: '深夜の検索よりも確かな 6 つの機能。',
        f1Title: '根拠のあるライブラリ',
        f1Body:
          '解剖学、同意、避妊、性欲、加齢、疾患。すべての記事に出典と最終監修日を明記しています。',
        f2Title: '生活に収まるコース',
        f2Body:
          '5 分のレッスンが積み重なって体系的なプログラムに。コミュニケーション、性欲のずれ、痛みのない性交、産後の回復など。',
        f3Title: 'カップル向けワーク',
        f3Body:
          '対話カードとステップ式のワークを二人で進められます。進捗の共有は、双方が同意した場合のみ。',
        f4Title: '匿名 Q&A',
        f4Body:
          '声に出して聞けないことを聞けます。質問は個人が特定できる情報を除いたうえで、教育者や臨床家が回答します。',
        f5Title: '関係のチェックイン',
        f5Body:
          '妥当性が検証された短い自己評価で、満足度・対話・ウェルビーイングの変化を記録。フィードのためではなく、あなたのために。',
        f6Title: '設計からしてプライベート',
        f6Body:
          'アプリロック、目立たないアイコンと名称、ローカル優先の保存、そして本当に消える「書き出して削除」。'
      },
      how: {
        title: '使い方',
        subtitle: '3 ステップ、約 4 分。',
        s1Title: '取り組みたいことを教えてください',
        s1Body: '短く、スキップも可能な質問だけ。本名も電話番号も連絡先の許可も求めません。',
        s2Title: '続けられる計画を受け取る',
        s2Body: '目標と、週にとれる時間に合わせて、レッスンとワークを組み立てます。',
        s3Title: '実践し、ふり返り、調整する',
        s3Body: '好きなタイミングで記録を。役に立ったものに合わせて計画が並び替わります。'
      },
      privacy: {
        title: 'プライバシーこそが製品です',
        body:
          '性生活を扱うアプリは、何よりも先に信頼を得なければなりません。だから PleasureLab は、あなたについてできるだけ知らないように作られています。',
        p1: '第三者の解析ツール、広告 SDK、アプリ横断トラッカーは一切使いません。',
        p2: '入力内容は既定で端末内に保存。クラウド同期は任意で、エンドツーエンド暗号化されます。',
        p3: '目立たないアイコンと名称、起動時の生体認証またはパスコードロック。',
        p4: 'アカウント削除はアプリ内から。バックアップを含め 30 日以内に消去します。',
        note: 'PleasureLab は教育目的のアプリであり、医療の代わりにはなりません。痛みや不安がある場合は医療機関にご相談ください。'
      },
      faq: {
        title: 'よくある質問',
        q1: '独身でも役に立ちますか？',
        a1: 'はい。ライブラリの約半分は一人で読む方に向けた内容です（解剖学、健康、性欲、ボディイメージ、自己理解）。カップル向けワークは独立した任意のセクションです。',
        q2: '内容は露骨ですか？',
        a2: '率直で解剖学的に正確ですが、図解は写真ではなく医学的なイラストです。18 歳以上を対象としています。',
        q3: '料金はいくらですか？',
        a3: 'ライブラリの大部分は無料です。PleasureLab Plus では全コース、カップル向けワーク、無制限の匿名質問が使えます（月額または年額）。',
        q4: '解約はどうすればいいですか？',
        a4: 'サポートセンターから解約フォームを送るか、App Store / Google Play のサブスクリプション設定から直接解約できます。どちらでも有効です。',
        q5: '返金してもらえますか？',
        a5: 'はい。すべての課金は 30 日間、理由を問わず返金の対象です。請求のスクリーンショットを添えて返金申請をお送りください。7〜14 営業日以内に返金が完了します。',
        q6: '誰が書いていますか？',
        a6: '性教育者、理学療法士、医師、心理士です。すべての記事に執筆者・監修者・監修日を表示しています。'
      },
      cta: {
        title: '正直な問いをひとつ、そこから。',
        body: 'ダウンロードは無料です。あなたが決めるまで、何も共有されません。',
        button: 'アプリを入手',
        support: 'お困りですか？'
      },
      footer: {
        tagline: '成人のための、エビデンスにもとづく性の学び。',
        product: 'プロダクト',
        company: '会社',
        legal: '規約',
        features: '機能',
        faq: 'よくある質問',
        support: 'サポートセンター',
        contact: 'お問い合わせ',
        privacyPolicy: 'プライバシーポリシー',
        terms: '利用規約',
        rights: 'All rights reserved.',
        adult: '18 歳以上の方を対象としています。'
      },

      support: {
        eyebrow: 'サポートセンター',
        title: 'どのようなご用件ですか？',
        subtitle:
          '下からご用件をお選びください。すべてのお問い合わせに、お使いの言語で 2 営業日以内にご返信します。',
        slaTitle: '返信までの目安',
        slaBody: '2 営業日以内',
        langTitle: '返信の言語',
        langBody: '日本語・English・繁體中文',
        emailTitle: 'メールでも受付',
        emailBody: '直接ご連絡ください',

        tabSuggestion: '製品へのご提案',
        tabSuggestionHint: 'アイデア・ご意見・不具合',
        tabRefund: '返金申請',
        tabRefundHint: '課金の取り消し',
        tabCancel: 'サブスク解約',
        tabCancelHint: '今後の課金を停止',

        name: 'お名前・ニックネーム',
        namePlaceholder: 'どのようにお呼びすればよいですか？',
        email: 'メールアドレス',
        emailPlaceholder: 'you@example.com',
        emailHelpOptional: '任意です。ただしご記入がないとご返信できません。',
        emailHelpRequired: '必須です。お支払いに使用したメールアドレスをご記入ください。',
        message: '詳細',
        submit: '送信する',
        submitting: '送信中…',
        clear: '入力をクリア',
        consentLabel: '上記の情報が、この申請の対応のために利用されることに同意します。',

        sugIntro:
          'PleasureLab をより良くするご提案をお聞かせください。新機能のアイデア、足りないコンテンツ、不具合の報告は、すべて開発チームが直接読んでいます。',
        sugCategory: 'ご提案の種類',
        sugCatFeature: '新機能のアイデア',
        sugCatContent: 'コンテンツ・レッスンについて',
        sugCatBug: '不具合の報告',
        sugCatUx: 'デザイン・使いやすさ',
        sugCatOther: 'その他',
        sugMessagePlaceholder:
          'アイデアや問題点をご記入ください。不具合の場合は、操作の手順と実際に起きたことをお書きください。',
        sugDevice: '端末とアプリのバージョン',
        sugDevicePlaceholder: '例：iPhone 15、iOS 18.2、PleasureLab 3.4.1',

        refIntro:
          'すべての課金は 30 日間、理由を問わず返金の対象です。理由をご説明いただく必要はありません。取引を特定するため、お支払い時のメールアドレスと請求のスクリーンショットが必要です。',
        refPlatform: 'お支払い先',
        refPlatformApple: 'App Store（Apple）',
        refPlatformGoogle: 'Google Play',
        refPlatformWeb: '当社サイト（カード決済）',
        refPlatformOther: 'その他',
        refOrderId: '注文番号・取引 ID',
        refOrderPlaceholder: '例：MT7X9K2QPL（レシートに記載）',
        refAmount: '請求金額',
        refAmountPlaceholder: '例：JPY 8,800',
        refDate: '課金日',
        refReason: '返金をご希望の理由',
        refReasonAccident: '誤って購入した',
        refReasonDuplicate: '二重に課金された',
        refReasonUnauthorized: '身に覚えのない課金',
        refReasonExpectation: '想像していた内容と違った',
        refReasonTechnical: '解決できない技術的な問題',
        refReasonOther: 'その他',
        refMessagePlaceholder: '対応を早めるための補足があればご記入ください。',
        refNote:
          'App Store・Google Play 経由のご購入は、各プラットフォームからの返金となります。対象かどうかを確認のうえ、手順をご案内するか、可能な場合は当社が代理で申請します。',

        canIntro:
          '解約すると、以降の課金は停止します。理由は問いません。すでにお支払い済みの期間の終了までは、PleasureLab Plus をそのままご利用いただけます。',
        canPlan: 'ご利用中のプラン',
        canPlanMonthly: 'Plus — 月額',
        canPlanYearly: 'Plus — 年額',
        canPlanTrial: '無料トライアル',
        canPlanUnknown: 'わからない',
        canReason: '解約の理由',
        canReasonPrice: '価格が高い',
        canReasonUsage: 'あまり使っていない',
        canReasonContent: '内容が自分に合わなかった',
        canReasonTechnical: '技術的な問題',
        canReasonDone: '目的を達成した',
        canReasonOther: 'その他',
        canMessagePlaceholder: '任意です。率直なご意見は、次に作るものを本当に変えます。',
        canNote:
          'App Store・Google Play のサブスクリプション設定から、ご自身でいつでも解約できます。このフォームは、その方法でうまくいかない場合にご利用ください。',
        canDeleteLabel: 'アカウントとすべてのデータも削除する',
        canDeleteHelp: 'この操作は取り消せません。',

        uploadLabel: '請求のスクリーンショット',
        uploadHelp:
          '日付・金額・注文番号がわかるレシートまたは課金履歴のスクリーンショットを添付してください。JPG・PNG・WebP・HEIC、{max} MB まで。',
        uploadCta: 'ファイルを選択',
        uploadDrop: 'またはここにドラッグ',
        uploadReplace: '差し替える',
        uploadRemove: '削除',
        uploadRedactTip:
          'ヒント：見られたくない部分（カード番号の全桁やご住所など）は隠してかまいません。必要なのは日付・金額・注文番号だけです。',

        errRequired: 'この項目は必須です。',
        errEmail: '有効なメールアドレスをご入力ください。',
        errConsent: '続けるにはご確認をお願いします。',
        errFileRequired: '請求のスクリーンショットを添付してください。',
        errFileType: 'この形式には対応していません。JPG・PNG・WebP・HEIC をお使いください。',
        errFileSize: 'ファイルサイズが {max} MB を超えています。小さいスクリーンショットを添付してください。',
        errSummary: '強調表示された項目をご確認のうえ、もう一度お試しください。',
        errNetwork:
          'サポートサーバーに接続できませんでした。内容は下に保存してあります。メールでお送りいただくか、しばらくしてからもう一度お試しください。',

        okTitle: 'ありがとうございます。受け付けました。',
        okBodySuggestion: 'すべてのご提案に担当者が目を通します。詳細が必要な場合はメールでご連絡します。',
        okBodyRefund: '必要な情報はすべて受け取りました。お客様に追加のお手続きはありません。',
        okBodyCancel: '必要な情報はすべて受け取りました。お客様に追加のお手続きはありません。',

        nextTitle: 'この後の流れ',
        nextRef1:
          'お客様の申請は対象です。すべての課金は 30 日間、理由を問わず返金いたします。理由をお尋ねすることはありません。',
        nextRef2:
          '7〜14 営業日以内に返金が完了し、元のお支払い方法へ返金されます。ご利用の金融機関での反映には、さらに 1〜2 日かかる場合があります。',
        nextRef3:
          'お客様の側での作業はありません。再送信は不要です。完了しだいメールでお知らせしますので、安心してお待ちください。',
        nextCan1:
          '解約を承りました。理由はお尋ねしませんし、引き止めることもいたしません。',
        nextCan2:
          '7〜14 営業日以内に手続きが完了し、以降の課金は一切ありません。お支払い済みの期間が終わるまでは、PleasureLab Plus をそのままご利用いただけます。',
        nextCan3:
          'お客様の側での作業はありません。再送信は不要です。完了しだいメールでお知らせしますので、安心してお待ちください。',
        okTicket: '受付番号',
        okCopy: '番号をコピー',
        okCopied: 'コピーしました',
        okAnother: '別の申請を送る',

        fbTitle: 'メールで送信してください',
        fbBody:
          'このサイトではオンライン送信がまだ設定されていません。下の内容をコピーして {email} 宛にメールし、スクリーンショットを添付してください。',
        fbCopy: '内容をコピー',
        fbCopied: 'クリップボードにコピーしました',
        fbDownload: '内容をダウンロード',
        fbMail: 'メールアプリを開く',
        fbAttach: 'スクリーンショットの添付をお忘れなく。メールには自動で引き継がれません。'
      }
    },

    /* ------------------------------------------------------------------ */
    /* 繁體中文                                                            */
    /* ------------------------------------------------------------------ */
    'zh-Hant': {
      meta: {
        htmlLang: 'zh-Hant',
        dir: 'ltr',
        name: '繁體中文',
        homeTitle: 'PleasureLab — 以實證為基礎的兩性知識',
        homeDesc:
          'PleasureLab 是一款注重隱私的 App，用科學實證帶你認識性健康、親密關係與伴侶溝通。',
        supportTitle: '客服中心 — PleasureLab',
        supportDesc: '提交產品建議、退款申請或取消訂閱，我們會在兩個工作天內回覆。'
      },
      common: {
        brand: 'PleasureLab',
        language: '語言',
        theme: '主題',
        themeLight: '淺色',
        themeDark: '深色',
        themeSystem: '跟隨系統',
        required: '必填',
        optional: '選填',
        yes: '是',
        no: '否',
        backHome: '回到首頁',
        skipToContent: '跳至主要內容'
      },
      nav: {
        features: '功能',
        how: '使用方式',
        privacy: '隱私',
        faq: '常見問題',
        support: '客服中心',
        supportShort: '客服中心',
        cta: '下載 App'
      },
      hero: {
        eyebrow: '認真對待的兩性知識',
        title: '認識自己的身體、伴侶，以及你們的關係。',
        subtitle:
          'PleasureLab 把經同儕審查的性健康研究，整理成簡短、不帶批判的課程；再加上伴侶練習、匿名問答，以及把資料留在你這一邊的隱私設計。',
        ctaPrimary: '下載 App',
        ctaSecondary: '前往客服中心',
        note: '限 18 歲以上。沒有廣告，永不販售你的資料。',
        stat1Value: '400+',
        stat1Label: '經專業審閱的內容',
        stat2Value: '3',
        stat2Label: '支援語言',
        stat3Value: '0',
        stat3Label: '追蹤器與廣告 SDK'
      },
      features: {
        title: 'App 裡有什麼',
        subtitle: '六件事，做得比半夜上網亂查更好。',
        f1Title: '有實證的知識庫',
        f1Body:
          '解剖、同意、避孕、性慾、老化與各種身體狀況。每篇文章都標註出處與最後審閱日期。',
        f2Title: '塞得進生活的課程',
        f2Body:
          '五分鐘的小單元，累積成完整課程：溝通、性慾落差、無痛親密、產後恢復。',
        f3Title: '伴侶一起做的練習',
        f3Body:
          '引導式對話卡與分階段練習，兩人一起完成；進度共享需要雙方各自同意才會開啟。',
        f4Title: '匿名問答',
        f4Body:
          '問那些說不出口的問題。提問會先移除可識別身分的資訊，再由性教育者或臨床專業人員回覆。',
        f5Title: '關係定期檢視',
        f5Body:
          '簡短且經過信效度驗證的自評，記錄滿意度、溝通與身心狀態的變化——為你自己，不為任何動態牆。',
        f6Title: '從設計就保護隱私',
        f6Body:
          'App 鎖、低調的圖示與名稱、本機優先儲存，以及真的會刪乾淨的「匯出並刪除」。'
      },
      how: {
        title: '使用方式',
        subtitle: '三個步驟，大約四分鐘。',
        s1Title: '告訴我們你想處理什麼',
        s1Body: '簡短、可跳過的問題；不需要真實姓名、電話號碼，也不會索取通訊錄權限。',
        s2Title: '取得一份做得完的計畫',
        s2Body: 'PleasureLab 會依你的目標與每週可用時間，安排課程與練習。',
        s3Title: '練習、回顧、調整',
        s3Body: '想記錄的時候再記錄。計畫會依你覺得有用的內容重新排序。'
      },
      privacy: {
        title: '隱私本身就是產品',
        body:
          '一個談論性生活的 App，必須先贏得信任。所以 PleasureLab 從一開始就設計成盡可能少知道你的事。',
        p1: '不使用第三方分析工具、廣告 SDK 或跨 App 追蹤。',
        p2: '你的內容預設留在裝置上；雲端同步為選用，並採端對端加密。',
        p3: '低調的圖示與名稱，開啟時可設定生物辨識或密碼鎖。',
        p4: '可在 App 內刪除帳號，含備份在 30 天內清除。',
        note: 'PleasureLab 屬於教育用途，不能取代醫療照護。若你感到疼痛或擔憂，請諮詢專業醫療人員。'
      },
      faq: {
        title: '常見問題',
        q1: '單身的人也適合用嗎？',
        a1: '適合。知識庫中約有一半是為單獨閱讀而寫的——解剖、健康、性慾、身體意象與自我認識。伴侶練習是獨立且選用的區塊。',
        q2: '內容會很露骨嗎？',
        a2: '內容直白且符合解剖學事實，但以醫學風格的插圖呈現，而非照片。本 App 分級為 18 歲以上。',
        q3: '費用是多少？',
        a3: '知識庫大部分內容免費。PleasureLab Plus 可解鎖完整課程、伴侶練習與無限匿名提問，採月繳或年繳。',
        q4: '要怎麼取消訂閱？',
        a4: '你可以在客服中心提交取消訂閱申請，或直接到 App Store／Google Play 的訂閱設定中取消，兩種方式都有效。',
        q5: '可以退款嗎？',
        a5: '可以。所有扣款在 30 天內都適用無理由退款。請附上帳單截圖提交退款申請，退款會在 7 到 14 個工作天內完成。',
        q6: '內容由誰撰寫？',
        a6: '性教育者、物理治療師、家醫科醫師與心理師。每篇文章都會顯示作者、審閱者與審閱日期。'
      },
      cta: {
        title: '從一個誠實的問題開始。',
        body: 'PleasureLab 免費下載。在你決定之前，什麼都不會被分享。',
        button: '下載 App',
        support: '需要協助嗎？'
      },
      footer: {
        tagline: '為成年人打造、以實證為基礎的兩性知識。',
        product: '產品',
        company: '關於',
        legal: '法律',
        features: '功能',
        faq: '常見問題',
        support: '客服中心',
        contact: '聯絡我們',
        privacyPolicy: '隱私權政策',
        terms: '服務條款',
        rights: '版權所有。',
        adult: '本網站內容適用於 18 歲以上成年人。'
      },

      support: {
        eyebrow: '客服中心',
        title: '需要什麼協助？',
        subtitle: '請在下方選擇申請類型。我們會以你的語言，在兩個工作天內回覆每一則訊息。',
        slaTitle: '回覆時間',
        slaBody: '兩個工作天內',
        langTitle: '回覆語言',
        langBody: '繁體中文、日本語、English',
        emailTitle: '想用 Email？',
        emailBody: '也可以直接寫信給我們',

        tabSuggestion: '產品建議',
        tabSuggestionHint: '想法、意見、問題回報',
        tabRefund: '退款申請',
        tabRefundHint: '申請退回款項',
        tabCancel: '取消訂閱',
        tabCancelHint: '停止後續扣款',

        name: '稱呼',
        namePlaceholder: '我們該怎麼稱呼你？',
        email: '電子郵件',
        emailPlaceholder: 'you@example.com',
        emailHelpOptional: '選填，但若未填寫我們就無法回覆你。',
        emailHelpRequired: '必填，請填寫付款時使用的電子郵件。',
        message: '詳細說明',
        submit: '送出申請',
        submitting: '送出中…',
        clear: '清除表單',
        consentLabel: '我瞭解 PleasureLab 會使用以上資訊來處理這則申請。',

        sugIntro:
          '告訴我們怎麼讓 PleasureLab 更好。功能想法、缺少的內容、問題回報都會送到同一個地方，並由開發團隊親自閱讀。',
        sugCategory: '這則建議屬於',
        sugCatFeature: '功能想法',
        sugCatContent: '內容或課程',
        sugCatBug: '有東西壞掉了',
        sugCatUx: '設計或易用性',
        sugCatOther: '其他',
        sugMessagePlaceholder: '請描述你的想法或遇到的問題。若是錯誤回報，請說明你做了什麼、又發生了什麼。',
        sugDevice: '裝置與 App 版本',
        sugDevicePlaceholder: '例如：iPhone 15、iOS 18.2、PleasureLab 3.4.1',

        refIntro:
          '所有扣款在 30 天內都適用無理由退款，你不需要說明原因。為了找到這筆交易，我們需要你的付款電子郵件與帳單截圖。',
        refPlatform: '你在哪裡付款？',
        refPlatformApple: 'App Store（Apple）',
        refPlatformGoogle: 'Google Play',
        refPlatformWeb: '本站（信用卡）',
        refPlatformOther: '其他',
        refOrderId: '訂單或交易編號',
        refOrderPlaceholder: '例如：MT7X9K2QPL（收據上可找到）',
        refAmount: '扣款金額',
        refAmountPlaceholder: '例如：TWD 1,790',
        refDate: '扣款日期',
        refReason: '申請退款的原因',
        refReasonAccident: '不小心買到的',
        refReasonDuplicate: '被重複扣款',
        refReasonUnauthorized: '這筆扣款未經我授權',
        refReasonExpectation: '和我預期的不一樣',
        refReasonTechnical: '無法解決的技術問題',
        refReasonOther: '其他原因',
        refMessagePlaceholder: '其他有助於我們加快處理的說明。',
        refNote:
          '透過 App Store 或 Google Play 的購買，由平台方負責退款。我們會先確認你是否符合資格並說明步驟；在平台允許的情況下，也可以代你提出申請。',

        canIntro:
          '取消後將停止所有後續扣款，不需要說明原因。在你已付費的期間結束前，仍可繼續使用 PleasureLab Plus。',
        canPlan: '你目前的方案',
        canPlanMonthly: 'Plus — 月繳',
        canPlanYearly: 'Plus — 年繳',
        canPlanTrial: '免費試用',
        canPlanUnknown: '我不確定',
        canReason: '取消的原因',
        canReasonPrice: '價格太高',
        canReasonUsage: '用得不夠多',
        canReasonContent: '內容不太適合我',
        canReasonTechnical: '技術問題',
        canReasonDone: '我要的已經得到了',
        canReasonOther: '其他原因',
        canMessagePlaceholder: '選填，但坦白的意見真的會改變我們接下來做的東西。',
        canNote:
          '你也可以隨時在 App Store 或 Google Play 的訂閱設定中自行取消。只有在那個方式行不通時，才需要送出這份表單。',
        canDeleteLabel: '同時刪除我的帳號與所有資料',
        canDeleteHelp: '此操作永久生效，無法復原。',

        uploadLabel: '帳單截圖',
        uploadHelp:
          '請附上收據或扣款紀錄的截圖，需可看到日期、金額與訂單編號。支援 JPG、PNG、WebP、HEIC，上限 {max} MB。',
        uploadCta: '選擇檔案',
        uploadDrop: '或拖曳到這裡',
        uploadReplace: '更換',
        uploadRemove: '移除',
        uploadRedactTip:
          '小提醒：不想讓我們看到的部分（完整卡號、住家地址）可以先遮起來。我們只需要日期、金額與訂單編號。',

        errRequired: '此欄位為必填。',
        errEmail: '請輸入有效的電子郵件地址。',
        errConsent: '請先確認此項目才能繼續。',
        errFileRequired: '請附上你的帳單截圖。',
        errFileType: '不支援這種檔案格式，請使用 JPG、PNG、WebP 或 HEIC。',
        errFileSize: '檔案超過 {max} MB，請附上小一點的截圖。',
        errSummary: '請修正標示的欄位後再試一次。',
        errNetwork:
          '無法連線到客服伺服器。你填寫的內容已保留在下方，可以改用電子郵件寄出，或稍後再試一次。',

        okTitle: '謝謝你，申請已送出。',
        okBodySuggestion: '每一則建議都有真人閱讀。若需要更多細節，我們會寄信給你。',
        okBodyRefund: '我們已經收到所有需要的資料，你不需要再做任何事。',
        okBodyCancel: '我們已經收到所有需要的資料，你不需要再做任何事。',

        nextTitle: '接下來會怎麼進行',
        nextRef1:
          '你的申請符合資格。所有扣款在 30 天內都適用無理由退款，我們不會追問原因。',
        nextRef2:
          '退款會在 7 到 14 個工作天內完成，款項退回原付款方式。發卡銀行可能還需要一兩天才會顯示。',
        nextRef3:
          '你不需要再做任何事，也請不要重複提交。完成後我們會立刻寄電子郵件通知你，請放心耐心等待。',
        nextCan1:
          '取消申請已受理。我們不會詢問原因，也不會試圖挽留你。',
        nextCan2:
          '取消會在 7 到 14 個工作天內完成，之後不會再有任何扣款。在已付費的期間結束前，你仍可繼續使用 PleasureLab Plus。',
        nextCan3:
          '你不需要再做任何事，也請不要重複提交。完成後我們會立刻寄電子郵件通知你，請放心耐心等待。',
        okTicket: '你的受理編號',
        okCopy: '複製編號',
        okCopied: '已複製',
        okAnother: '再送出一則申請',

        fbTitle: '請改以電子郵件寄出',
        fbBody:
          '本站尚未設定線上送出功能。請複製下方內容，寄到 {email}，並附上你的截圖。',
        fbCopy: '複製內容',
        fbCopied: '已複製到剪貼簿',
        fbDownload: '下載內容',
        fbMail: '開啟郵件 App',
        fbAttach: '別忘了附上截圖——電子郵件無法自動帶過去。'
      }
    }
  };

  /* -------------------------------------------------------------------- */
  /* Runtime                                                               */
  /* -------------------------------------------------------------------- */

  var SUPPORTED = ['en', 'ja', 'zh-Hant'];
  var FALLBACK = 'en';
  var STORAGE_KEY = 'pl.lang';

  /**
   * Map any BCP-47 tag onto one of our supported locales.
   * Simplified Chinese deliberately falls through to English rather than
   * being served Traditional characters it did not ask for.
   */
  function normalize(tag) {
    if (!tag) return null;
    var t = String(tag).replace('_', '-');
    var lower = t.toLowerCase();

    if (lower === 'ja' || lower.indexOf('ja-') === 0) return 'ja';

    if (lower === 'zh' || lower.indexOf('zh-') === 0) {
      // Explicit script subtag wins.
      if (lower.indexOf('hant') !== -1) return 'zh-Hant';
      if (lower.indexOf('hans') !== -1) return null;
      // Region-based inference for the Traditional-using locales.
      if (/-(tw|hk|mo)\b/.test(lower)) return 'zh-Hant';
      return null; // zh, zh-CN, zh-SG → not Traditional
    }

    if (lower === 'en' || lower.indexOf('en-') === 0) return 'en';
    return null;
  }

  /** Resolve the locale: ?lang= → saved choice → browser → fallback. */
  function detect() {
    var fromQuery = null;
    try {
      fromQuery = new URLSearchParams(global.location.search).get('lang');
    } catch (e) {
      /* URLSearchParams unavailable — ignore */
    }
    var q = normalize(fromQuery);
    if (q) return { lang: q, source: 'query' };

    var saved = null;
    try {
      saved = global.localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      /* storage blocked — ignore */
    }
    if (saved && SUPPORTED.indexOf(saved) !== -1) return { lang: saved, source: 'stored' };

    var nav = global.navigator || {};
    var candidates = nav.languages && nav.languages.length ? nav.languages : [nav.language];
    for (var i = 0; i < candidates.length; i++) {
      var hit = normalize(candidates[i]);
      if (hit) return { lang: hit, source: 'browser' };
    }
    return { lang: FALLBACK, source: 'fallback' };
  }

  /** Look up a dotted key, falling back to English and then to the key itself. */
  function get(lang, key, vars) {
    var value = walk(DICT[lang], key);
    if (value == null) value = walk(DICT[FALLBACK], key);
    if (value == null) return key;
    if (vars) {
      value = String(value).replace(/\{(\w+)\}/g, function (match, name) {
        return Object.prototype.hasOwnProperty.call(vars, name) ? vars[name] : match;
      });
    }
    return value;
  }

  function walk(root, key) {
    if (!root) return null;
    var parts = key.split('.');
    var node = root;
    for (var i = 0; i < parts.length; i++) {
      if (node == null || typeof node !== 'object') return null;
      node = node[parts[i]];
    }
    return typeof node === 'string' ? node : null;
  }

  global.PLi18n = {
    dict: DICT,
    supported: SUPPORTED,
    fallback: FALLBACK,
    storageKey: STORAGE_KEY,
    normalize: normalize,
    detect: detect,
    t: get
  };
})(window);
