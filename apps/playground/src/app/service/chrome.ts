import { sleep } from '@loststar/utils/common';
import puppeteer from 'puppeteer';

const session1 = {
  localStorageData: {
    'bhMUVc+TbTiQqfh+VPt3/w==': 'false',
    WAPrimaryFeatures:
      '["clear_and_delete_chat_sync","contact_except","reactions_send","ddm_settings","vo_sp_receiver","recent_sticker","poll_creation","poll_creation_one_on_one","favorite_sticker","link_preview"]',
    WAUnarchiveChatsSetting: 'true',
    'whatsapp-mutex': '"x255792297:init_1681058540075"',
    ChatThreadLoggingSecret: '"a38/6DTWYoHRyuLoEX2fD50tce+8R5RnyDbnDHs2Xq8="',
    WARoutingInfo: '{"domain":"fb","edgeRouting":"CAUIDQ=="}',
    'rzX/opz/cJQTa43uN1QnKA==': 'false',
    'hour-24': 'true',
    ChatThreadLoggingLastUploadedStartTs: '0',
    '3i6ihEsDmowwxZE8pOah+g==': 'true',
    'MSmB5s5MD0BBWVPOvq9Sjg==':
      '{"readReceipts":"none","profilePicture":"all","about":"all","online":"all","lastSeen":"none","groupAdd":"all"}',
    'ZbUNE38mHXy13RE76WHeeQ==': '{"views":0}',
    WaInitialHistorySynced: '"true"',
    WebEncKeySalt:
      '"QTkvyMxZ/jSOVr2U4cIXD0bBrzR6xYNyUSMQTu2ZfNUv1pc3Yg0KEqbLrdxGMI+i9ZFAK+S9YWdZ7GRTnjOVGeZEYUI1d+kO3UCrAjTkljsqEPjbp0Tw8UmNffTrLeTaQUHhBAofUYHEEruR4KfeW/gCOpHaiesMoqiGo14L4yU="',
    'last-wid-md': '"85262012351:21@c.us"',
    '5dRA7qnYpuVJQeumM8XbEw==': 'false',
    WABlocklistHash: '"1656740896737895"',
    WALid: '"18464114770138:21@lid"',
    'o0bJoSqHxeTZz/soDJUD8A==':
      '"{\\"85264818012-1634552849@g.us\\":\\"PvSPfUjE\\",\\"85296665004-1562996477@g.us\\":\\"681BZqbq\\",\\"120363027601244603@g.us\\":\\"CiT9Roah\\",\\"120363047954484000@g.us\\":\\"YPZEmQ7+\\",\\"85261273533-1542635722@g.us\\":\\"HzGIiwXp\\",\\"120363044179319881@g.us\\":\\"KJGbheRH\\",\\"85293720194-1467300827@g.us\\":\\"J+CvscU7\\",\\"120363045639311966@g.us\\":\\"G519kJ48\\",\\"85256278423-1632706923@g.us\\":\\"Wa3eC7+U\\",\\"85263175703-1579830224@g.us\\":\\"P+1w7wDr\\",\\"120363045280682677@g.us\\":\\"fIP4cUTC\\",\\"85296127066-1468371875@g.us\\":\\"y7V3Smnw\\",\\"120363030047085225@g.us\\":\\"Yvp2HkRJ\\",\\"120363104617159986@g.us\\":\\"BqBXVlOV\\",\\"120363026034827223@g.us\\":\\"7ekFLXxf\\",\\"120363028018372710@g.us\\":\\"PeGIppM2\\",\\"120363038557907007@g.us\\":\\"akTLgHAg\\",\\"120363028137646714@g.us\\":\\"jQvNlvPt\\",\\"85296229078-1354907036@g.us\\":\\"HDpDFCrC\\",\\"120363044476383855@g.us\\":\\"r7iQkcyD\\",\\"120363025469050380@g.us\\":\\"mvvxZ8Wc\\",\\"120363048028317987@g.us\\":\\"pARRrSJB\\",\\"120363042353683959@g.us\\":\\"giz713wT\\",\\"120363026943156968@g.us\\":\\"AgxxOq6a\\",\\"120363024871891286@g.us\\":\\"uwTHKKWM\\",\\"120363040743744359@g.us\\":\\"Njqbrb/x\\",\\"120363043159963163@g.us\\":\\"0ysKNcY+\\",\\"120363040990966642@g.us\\":\\"KE/mYFeI\\",\\"120363039816132934@g.us\\":\\"YAz1pUWe\\",\\"120363040104432014@g.us\\":\\"kdAF67bl\\",\\"120363020880380686@g.us\\":\\"kewm+tEP\\",\\"120363022640936214@g.us\\":\\"RgwnXl6l\\",\\"120363043553120100@g.us\\":\\"3MRPcA8L\\",\\"120363036981146770@g.us\\":\\"AVATQfld\\",\\"120363041689917381@g.us\\":\\"Ft3Ftpn3\\",\\"85267366092-1616863925@g.us\\":\\"ztI2WWHp\\",\\"85256434357-1607602092@g.us\\":\\"Fc3DtJYx\\",\\"85256278423-1600357391@g.us\\":\\"Q7M/FlBT\\",\\"85256278423-1595412881@g.us\\":\\"BfO7S92g\\",\\"85255993228-1592466998@g.us\\":\\"0ljDvYVE\\",\\"85262012351-1589971687@g.us\\":\\"0n7XIBZU\\",\\"85292230340-1589479022@g.us\\":\\"Ou5b8lK7\\",\\"85251625120-1579090152@g.us\\":\\"630hIDMp\\",\\"85260387973-1567596689@g.us\\":\\"YjxBwKOE\\",\\"85267076823-1563155485@g.us\\":\\"m3Hgz+n5\\",\\"85292727037-1558076135@g.us\\":\\"yyzsXbYR\\",\\"85263346242-1558010938@g.us\\":\\"cNkKkssQ\\",\\"85255993228-1557394061@g.us\\":\\"slpVRviS\\",\\"85296024088-1548414207@g.us\\":\\"wIPzOjv7\\",\\"85269078171-1543681418@g.us\\":\\"1DUMTKM0\\",\\"85297502386-1529634856@g.us\\":\\"YKJ97bum\\",\\"85296638559-1527565512@g.us\\":\\"EXDWUP7V\\",\\"85262012351-1517828769@g.us\\":\\"83oHCR6C\\",\\"85262012351-1517828689@g.us\\":\\"VQFZaVcF\\",\\"85269078171-1513952395@g.us\\":\\"N8Q81Bog\\",\\"85252820006-1505375420@g.us\\":\\"zeA3WoK5\\",\\"85263038950-1504959488@g.us\\":\\"auHFwaZi\\",\\"85296656337-1504939840@g.us\\":\\"BO2WQMSY\\",\\"85295709808-1504106973@g.us\\":\\"N8Q81Bog\\",\\"85297502386-1502640029@g.us\\":\\"Tkv6bveM\\",\\"85295018945-1486307128@g.us\\":\\"auHFwaZi\\",\\"85263038950-1484915677@g.us\\":\\"dKs7ArvT\\",\\"85262012351-1479370080@g.us\\":\\"Kdj/Welm\\",\\"85262012351-1470220996@g.us\\":\\"24ApzdDB\\",\\"85296229078-1469973197@g.us\\":\\"OnbAOO61\\",\\"85291676917-1467713444@g.us\\":\\"N8Q81Bog\\",\\"85290455212-1464766439@g.us\\":\\"02Dt5Kvo\\",\\"85298074749-1451527372@g.us\\":\\"N8Q81Bog\\",\\"85298374363-1422653275@g.us\\":\\"Kdj/Welm\\",\\"85295709808-1421502847@g.us\\":\\"p7H9Ehuq\\",\\"85295709808-1419095046@g.us\\":\\"p7H9Ehuq\\",\\"85262785404-1418137968@g.us\\":\\"2ingrtz1\\",\\"85262785404-1412087992@g.us\\":\\"2ingrtz1\\",\\"85298374363-1408885532@g.us\\":\\"KqfnR8kb\\",\\"85298374363-1405102136@g.us\\":\\"2ingrtz1\\",\\"85262785404-1402750618@g.us\\":\\"2ingrtz1\\",\\"85264360002-1331715831@g.us\\":\\"1SdBSYdU\\"}"',
    MdHistoryLastChunkProcessed: '"5_0"',
    WAHistorySyncStatus: '{"initialCompleted":true}',
    '7pAtx5Y29luxYmyTUGQbgw==':
      '[{"id":"1681058548580","startTime":1681058548580,"pttCancelBroadcast":0,"pttCancelGroup":0,"pttCancelIndividual":0,"pttDraftReviewBroadcast":0,"pttDraftReviewGroup":0,"pttDraftReviewIndividual":0,"pttFastplaybackBroadcast":0,"pttFastplaybackGroup":0,"pttFastplaybackIndividual":0,"pttLockBroadcast":0,"pttLockGroup":0,"pttLockIndividual":0,"pttPlaybackBroadcast":0,"pttPlaybackGroup":0,"pttPlaybackIndividual":0,"pttRecordBroadcast":0,"pttRecordGroup":0,"pttRecordIndividual":0,"pttSendBroadcast":0,"pttSendGroup":0,"pttSendIndividual":0,"pttPausedRecordBroadcast":0,"pttPausedRecordGroup":0,"pttPausedRecordIndividual":0,"pttStopTapBroadcast":0,"pttStopTapGroup":0,"pttStopTapIndividual":0,"pttOutOfChatBroadcast":0,"pttOutOfChatGroup":0,"pttOutOfChatIndividual":0,"goldenBoxContactNarrativeAppearCount":0,"goldenBoxContactDialogAppearCount":0,"goldenBoxContactDialogSelectCount":0,"goldenBoxGroupNarrativeAppearCount":0,"goldenBoxGroupDialogAppearCount":0,"goldenBoxGroupDialogSelectCount":0,"infoScreenContactNarrativeAppearCount":0,"infoScreenContactDialogAppearCount":0,"infoScreenContactDialogSelectCount":0,"infoScreenGroupNarrativeAppearCount":0,"infoScreenGroupDialogAppearCount":0,"infoScreenGroupDialogSelectCount":0,"chatsListNarrativeAppearCount":1,"chatsListDialogAppearCount":0,"chatsListDialogSelectCount":0,"statusListNarrativeAppearCount":0,"statusListDialogAppearCount":0,"statusListDialogSelectCount":0,"callingScreenAudioNarrativeAppearCount":0,"callingScreenAudioDialogAppearCount":0,"callingScreenAudioDialogSelectCount":0,"prinaLastEvent":1681058555153,"communityTabGroupNavigations":0,"communityTabToHomeViews":0,"communityTabViews":0,"communityTabViewsViaContextMenu":0,"communityNoActionTabViews":0,"communityHome":{},"pnhCagActions":{},"kicGroupNotificationTaps":0,"kicGroupNotifications":0,"kicNotificationTaps":0,"kicNotifications":0}]',
    syncd_disabled_due_to_fatal: 'false',
    WANoiseInfoIv:
      '["FCeHtZbaXRLVqEclgBCrSg==","S2sOkVlZ9aC1eg8w+FNQug==","GUl9oKYOzyXo+ByxH1PZWA=="]',
    critical_data_synced: 'true',
    WANuxList: '["ephemeral","desktop_upsell","ephemeral_view_once_receiver"]',
    MdSyncActionsActionSanitized: 'true',
    WAArchiveV2EnabledSetting: 'true',
    'uXSoZIkVGInJhIDRfSLaSQ==':
      '[{"id":"global_mute","expiration":0,"callExpiration":0,"isAutoMuted":false}]',
    WANoiseInfo:
      '{"privKey":"Tuj9fQeaXSHZUNEKqfFezeAckjXhWLyHC6+/3+1jdOreVAYBMIAP9JNL0JAXzCsd","pubKey":"vHBV4s7OZwwR8C0W1S3TlcQE2UzQh4JxTViH0rn1HKOl0vf4aTtNfUoA5TSm5e9j","recoveryToken":"zVdhVQAW7WD0gb2IfGqM/AwKHV+LyVGPCl5+Fp580BQ="}',
    WAWebEncKeySalt:
      '"QTkvyMxZ/jSOVr2U4cIXD0bBrzR6xYNyUSMQTu2ZfNUv1pc3Yg0KEqbLrdxGMI+i9ZFAK+S9YWdZ7GRTnjOVGeZEYUI1d+kO3UCrAjTkljsqEPjbp0Tw8UmNffTrLeTaQUHhBAofUYHEEruR4KfeW/gCOpHaiesMoqiGo14L4yU="',
    WASyncdPrimaryAllowsAllMutations: 'true',
    abprops:
      '{"abKey":"4ep,1Ss,S4,HK,2h,12,1A,7I,1Q,g","refresh":"83794","lastSyncTime":1681058553045}',
    ChatThreadLoggingOffset: '43965',
    session: '{"pup":"peteer"}',
    'Ak7r5ypuEaHyGIOsa2meBQ==': 'false',
    'lbmi6Cm9J5gUpZ4DvMYH3w==': 'false',
    WADailyStatsStartTime: '1681058548580',
    'R1Cfc3tqcgbPbqVgO7xjNA==': '"TW"',
    WALangPref: '"en_HK"',
    WAShouldCheckContactSyncStatus: 'true',
    'YzEq47s0fitO8PXKGhsznA==': '{"views":1}',
    MdRecentMailboxAgeDays: '0',
    'me-display-name': '"+852 ∙∙∙ ∙∙∙51"',
    MdPairingTimestamp: '1681058548',
    'QnVvWu5/LXXBFAuM/GPdbQ==':
      '"{\\"85264818012-1634552849@g.us\\":389102,\\"85296665004-1562996477@g.us\\":23184,\\"85256089509@s.whatsapp.net\\":123,\\"85261716827@s.whatsapp.net\\":1559,\\"120363027601244603@g.us\\":1917,\\"120363047954484000@g.us\\":2120,\\"85268983309@s.whatsapp.net\\":266,\\"85262023637@s.whatsapp.net\\":510,\\"85261273533-1542635722@g.us\\":3765,\\"85292598670@s.whatsapp.net\\":1054,\\"120363044179319881@g.us\\":473,\\"85261273533@s.whatsapp.net\\":242,\\"85293013473@s.whatsapp.net\\":176,\\"85293720194-1467300827@g.us\\":14111,\\"85268409334@s.whatsapp.net\\":892,\\"85298374363@s.whatsapp.net\\":2372,\\"85266037597@s.whatsapp.net\\":4249,\\"85296084895@s.whatsapp.net\\":3668,\\"85298384019@s.whatsapp.net\\":879,\\"120363045639311966@g.us\\":322,\\"85268788097@s.whatsapp.net\\":39,\\"85256278423-1632706923@g.us\\":2201,\\"85269393660@s.whatsapp.net\\":202,\\"85267221605@s.whatsapp.net\\":797,\\"85292621931@s.whatsapp.net\\":262,\\"85298336447@s.whatsapp.net\\":4,\\"85263175703-1579830224@g.us\\":11851,\\"85294567355@s.whatsapp.net\\":1,\\"120363045280682677@g.us\\":789,\\"85296127066-1468371875@g.us\\":2376,\\"85298040560@s.whatsapp.net\\":827,\\"85296638559@s.whatsapp.net\\":2897,\\"85298785382@s.whatsapp.net\\":969,\\"6282218764085@s.whatsapp.net\\":1,\\"85293440909@s.whatsapp.net\\":426,\\"85296986284@s.whatsapp.net\\":5445,\\"85295028543@s.whatsapp.net\\":13,\\"85266238424@s.whatsapp.net\\":592,\\"85260991386@s.whatsapp.net\\":40,\\"85295709808@s.whatsapp.net\\":74,\\"447788257840@s.whatsapp.net\\":91,\\"85296127066@s.whatsapp.net\\":38,\\"85261082820@s.whatsapp.net\\":91,\\"85290237532@s.whatsapp.net\\":86,\\"85267031749@s.whatsapp.net\\":17,\\"85294374990@s.whatsapp.net\\":23,\\"120363030047085225@g.us\\":109,\\"120363104617159986@g.us\\":93,\\"6283115963374@s.whatsapp.net\\":2,\\"17745227920@s.whatsapp.net\\":2,\\"85298806805@s.whatsapp.net\\":38,\\"120363026034827223@g.us\\":103,\\"85256278423@s.whatsapp.net\\":216,\\"85296096642@s.whatsapp.net\\":44,\\"85293489003@s.whatsapp.net\\":471,\\"85267611327@s.whatsapp.net\\":3,\\"85292082658@s.whatsapp.net\\":338,\\"85293263654@s.whatsapp.net\\":66,\\"85262451752@s.whatsapp.net\\":258,\\"120363028018372710@g.us\\":239,\\"85291880415@s.whatsapp.net\\":1095,\\"85256033551@s.whatsapp.net\\":110,\\"22893723095@s.whatsapp.net\\":2,\\"972547199390@s.whatsapp.net\\":2,\\"85264660702@s.whatsapp.net\\":422,\\"85269078171@s.whatsapp.net\\":678,\\"120363038557907007@g.us\\":1263,\\"85261336653@s.whatsapp.net\\":13,\\"85267799176@s.whatsapp.net\\":32,\\"85290455212@s.whatsapp.net\\":214,\\"85262109460@s.whatsapp.net\\":90,\\"62895420141114@s.whatsapp.net\\":4,\\"923165757410@s.whatsapp.net\\":2,\\"8562056103696@s.whatsapp.net\\":4,\\"85292487792@s.whatsapp.net\\":42,\\"85292361958@s.whatsapp.net\\":5,\\"85290840531@s.whatsapp.net\\":9,\\"85291317038@s.whatsapp.net\\":9,\\"85267955505@s.whatsapp.net\\":9,\\"85266450925@s.whatsapp.net\\":643,\\"85268087084@s.whatsapp.net\\":75,\\"120363028137646714@g.us\\":1734,\\"85266213030@s.whatsapp.net\\":8,\\"85292374513@s.whatsapp.net\\":6,\\"85296229078-1354907036@g.us\\":39,\\"85293314873@s.whatsapp.net\\":15,\\"23597124159@s.whatsapp.net\\":2,\\"85261877293@s.whatsapp.net\\":67,\\"85261705958@s.whatsapp.net\\":114,\\"85293055325@s.whatsapp.net\\":25,\\"85262191304@s.whatsapp.net\\":150,\\"85265346222@s.whatsapp.net\\":491,\\"16305201928@s.whatsapp.net\\":72,\\"85296616160@s.whatsapp.net\\":18,\\"120363044476383855@g.us\\":48,\\"85297760423@s.whatsapp.net\\":85,\\"85264892819@s.whatsapp.net\\":4,\\"120363025469050380@g.us\\":397,\\"85267206726@s.whatsapp.net\\":214,\\"85291566427@s.whatsapp.net\\":3,\\"85262340535@s.whatsapp.net\\":10,\\"120363048028317987@g.us\\":39,\\"85297502386@s.whatsapp.net\\":252,\\"120363042353683959@g.us\\":2654,\\"447947397227@s.whatsapp.net\\":3,\\"447946608980@s.whatsapp.net\\":3,\\"85291382668@s.whatsapp.net\\":4,\\"85290198098@s.whatsapp.net\\":2,\\"85297545610@s.whatsapp.net\\":5,\\"447424285121@s.whatsapp.net\\":3,\\"120363026943156968@g.us\\":1971,\\"120363024871891286@g.us\\":214,\\"50487358829@s.whatsapp.net\\":4,\\"85292752955@s.whatsapp.net\\":11,\\"120363040743744359@g.us\\":1682,\\"85293444919@s.whatsapp.net\\":76,\\"85293161615@s.whatsapp.net\\":12,\\"85298533066@s.whatsapp.net\\":67,\\"85296665004@s.whatsapp.net\\":46,\\"85291785506@s.whatsapp.net\\":8,\\"85261504956@s.whatsapp.net\\":24,\\"85263150647@s.whatsapp.net\\":3,\\"85261905223@s.whatsapp.net\\":8,\\"120363043159963163@g.us\\":106,\\"85261728997@s.whatsapp.net\\":358,\\"85296129088@s.whatsapp.net\\":19,\\"85255664510@s.whatsapp.net\\":2,\\"85253993993@s.whatsapp.net\\":14,\\"120363040990966642@g.us\\":57,\\"85291594010@s.whatsapp.net\\":4,\\"85261585283@s.whatsapp.net\\":10,\\"85292230340@s.whatsapp.net\\":120,\\"120363039816132934@g.us\\":212,\\"85292119404@s.whatsapp.net\\":15,\\"120363040104432014@g.us\\":260,\\"120363020880380686@g.us\\":352,\\"50248999337@s.whatsapp.net\\":2,\\"85267005570@s.whatsapp.net\\":25,\\"85268554111@s.whatsapp.net\\":35,\\"85293270489@s.whatsapp.net\\":53,\\"120363022640936214@g.us\\":6,\\"85251789918@s.whatsapp.net\\":52,\\"85260122714@s.whatsapp.net\\":129,\\"85261300076@s.whatsapp.net\\":43,\\"85264878770@s.whatsapp.net\\":3,\\"85294682476@s.whatsapp.net\\":2,\\"85297324399@s.whatsapp.net\\":2,\\"85292164175@s.whatsapp.net\\":5,\\"85293398722@s.whatsapp.net\\":2,\\"120363043553120100@g.us\\":3,\\"120363036981146770@g.us\\":3,\\"120363041689917381@g.us\\":4,\\"85267366092-1616863925@g.us\\":4,\\"85256434357-1607602092@g.us\\":3,\\"85256278423-1600357391@g.us\\":8,\\"85256278423-1595412881@g.us\\":4,\\"85255993228-1592466998@g.us\\":5,\\"85262012351-1589971687@g.us\\":4,\\"85292230340-1589479022@g.us\\":4,\\"85251625120-1579090152@g.us\\":3,\\"85260387973-1567596689@g.us\\":6,\\"85267076823-1563155485@g.us\\":6,\\"85292727037-1558076135@g.us\\":7,\\"85263346242-1558010938@g.us\\":4,\\"85255993228-1557394061@g.us\\":6,\\"85296024088-1548414207@g.us\\":3,\\"85269078171-1543681418@g.us\\":3,\\"85297502386-1529634856@g.us\\":5,\\"85296638559-1527565512@g.us\\":3,\\"85262012351-1517828769@g.us\\":2,\\"85262012351-1517828689@g.us\\":3,\\"85269078171-1513952395@g.us\\":3,\\"85252820006-1505375420@g.us\\":4,\\"85263038950-1504959488@g.us\\":4,\\"85296656337-1504939840@g.us\\":3,\\"85295709808-1504106973@g.us\\":3,\\"85297502386-1502640029@g.us\\":5,\\"85295018945-1486307128@g.us\\":4,\\"85263038950-1484915677@g.us\\":4,\\"85262012351-1479370080@g.us\\":2,\\"85262012351-1470220996@g.us\\":4,\\"85296229078-1469973197@g.us\\":4,\\"85291676917-1467713444@g.us\\":3,\\"85290455212-1464766439@g.us\\":3,\\"85298074749-1451527372@g.us\\":3,\\"85298374363-1422653275@g.us\\":3,\\"85295709808-1421502847@g.us\\":4,\\"85295709808-1419095046@g.us\\":4,\\"85262785404-1418137968@g.us\\":3,\\"85262785404-1412087992@g.us\\":3,\\"85298374363-1408885532@g.us\\":4,\\"85298374363-1405102136@g.us\\":3,\\"85262785404-1402750618@g.us\\":3,\\"85264360002-1331715831@g.us\\":10}"',
  },
};

const test1 = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    userDataDir: './tmp/myChromeSession',
  });
  const page = await browser.newPage();
  await page.goto('https://web.whatsapp.com/');

  for (let i = 0; i <= 1000; i++) {
    console.log('check');
    await sleep({
      ms: 1000,
    });
    const localStorageData = await page.evaluate(() => {
      const json = {};
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        json[key] = localStorage.getItem(key);
      }
      return json;
    });
    console.log({
      localStorageData,
    });
  }

  console.log({});
};

export const chromeService = {
  test1,
};
