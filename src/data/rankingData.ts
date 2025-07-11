/* =======================================
 * ランキングデータ
 * URL:src/data/rankingData.ts
 * Created: 2025-07-03
 * Last updated: 2025-07-03
 * ======================================= */

export type RankingItem = {
  id: number;
  rank: number;
  name: string;
  image: string;
  shop: string;
  url: string | { pc: string; sp: string };
  area: string;
  size?: string;
};

export const rankingData: Record<string, RankingItem[]> = {
  first: [
    {
      id: 1,
      rank: 1,
      area: 'fukuoka',
      shop: '福岡ホットポイントヴィラ',
      name: '宝生 かな',
      url: 'https://www.fukuoka-hotpoint.jp/villa/g-info.php?g_id=4368&ls=glist',
      image: '/images/cast/fu_villa_kana.webp',
      size: 'Age.35 / T.158 / B.84 [D] / W.56 / H.85',
    },
    {
      id: 2,
      rank: 2,
      area: 'kumamoto',
      shop: '熊本ホットポイント',
      name: '星川★美桜',
      url: 'https://www.kumamoto-hotpoint.cc/detail.php?g_id=467&is_Area=no&s_dir=hot&mode=slink&link_Source=glist',
      image: '/images/cast/km_hot_mio.webp',
    },
    {
      id: 3,
      rank: 3,
      area: 'kumamoto',
      shop: '熊本ホットポイント',
      name: '神崎あんり',
      url: 'https://www.kumamoto-hotpoint.cc/detail.php?g_id=176&is_Area=no&s_dir=hot&mode=slink&link_Source=glist',
      image: '/images/cast/km_hot_anri.webp',
    },
    {
      id: 4,
      rank: 4,
      area: 'kyoto',
      shop: 'リップスティック',
      name: '槇村ももか',
      url: 'https://www.hot-point.co.jp/lip/girls_info.php?g_id=3958&ls=glist',
      image: '/images/cast/kt_lip_momoka.webp',
    },
    {
      id: 5,
      rank: 5,
      area: 'yokohama',
      shop: '横浜ダンディ',
      name: '鈴音 にこ',
      url: {
        pc: 'https://www.dandy-g.jp/dandy/detail.php?g_id=7024',
        sp: 'https://www.dandy-g.jp/sp/dandy/g_info_sp.php?g_id=7024',
      },
      image: '/images/cast/yh_dandy_niko.webp',
    },
    {
      id: 6,
      rank: 6,
      area: 'kumamoto',
      shop: '熊本ホットポイント',
      name: '春野 蘭',
      url: 'https://www.kumamoto-hotpoint.cc/detail.php?g_id=181',
      image: '/images/cast/km_hot_ran.webp',
    },
    {
      id: 7,
      rank: 7,
      area: 'yokohama',
      shop: '横浜ダンディ',
      name: '青山瀬里',
      url: {
        pc: 'https://www.dandy-g.jp/dandy/detail.php?g_id=7133',
        sp: 'https://www.dandy-g.jp/sp/dandy/g_info_sp.php?g_id=7133',
      },
      image: '/images/cast/yh_dandy_seri.webp',
    },
    {
      id: 8,
      rank: 8,
      area: 'kumamoto',
      shop: '熊本ホットポイント',
      name: 'サラ',
      url: 'https://www.kumamoto-hotpoint.cc/detail.php?g_id=173&is_Area=no&s_dir=hot&mode=slink&link_Source=stop_rk&log=1626519419',
      image: '/images/cast/km_hot_sara.webp',
    },
    {
      id: 9,
      rank: 9,
      area: 'kumamoto',
      shop: '熊本ホットポイント',
      name: '藤咲ゆあ',
      url: 'https://www.kumamoto-hotpoint.cc/detail.php?g_id=465',
      image: '/images/cast/km_hot_yua.webp',
    },
    {
      id: 10,
      rank: 10,
      area: 'kyoto',
      shop: '京都ホットポイント',
      name: '唐沢ひめの',
      url: 'https://www.hot-point.co.jp/hot/girls_info.php?g_id=5504',
      image: '/images/cast/kt_hot_himeno.webp',
    },

    {
      id: 11,
      rank: 11,
      area: 'kumamoto',
      shop: '熊本ホットポイント',
      name: '逢坂えれな',
      url: 'https://www.kumamoto-hotpoint.cc/detail.php?g_id=466&is_Area=no&s_dir=hot&mode=slink&link_Source=glist',
      image: '/images/cast/km_hot_erena.webp',
    },
    {
      id: 12,
      rank: 12,
      area: 'yokohama',
      shop: 'ミスターダンディ',
      name: '山下 にな',
      url: {
        pc: 'https://www.dandy-g.jp/mr_dandy/detail.php?g_id=7168',
        sp: 'https://www.dandy-g.jp/sp/mr_dandy/g_info_sp.php?g_id=7168',
      },
      image: '/images/cast/yh_mr_nina.webp',
    },
    {
      id: 13,
      rank: 13,
      area: 'fukuoka',
      shop: '福岡ホットポイントヴィラ',
      name: '平子 れん',
      url: 'https://www.fukuoka-hotpoint.jp/villa/g-info.php?g_id=6371&ls=glist',
      image: '/images/cast/fu_villa_ren.webp',
    },
    {
      id: 14,
      rank: 14,
      area: 'kobe',
      shop: '神戸ホットポイント',
      name: '有村 かずは',
      url: 'https://www.hpg-kobe.jp/hot/model_profile759.html',
      image: '/images/cast/kb_hot_kazuha.webp',
    },
    {
      id: 15,
      rank: 14,
      area: 'kumamoto',
      shop: '熊本ホットポイントヴィラ',
      name: '藤田 せな',
      url: 'https://www.hotpoint-villa.cc/detail.php?g_id=52',
      image: '/images/cast/km_villa_sena.webp',
    },
    {
      id: 16,
      rank: 16,
      area: 'kyoto',
      shop: 'リップスティック',
      name: '飯田あいな',
      url: 'https://www.hot-point.co.jp/lip/girls_info.php?g_id=7452',
      image: '/images/cast/kt_lip_aina.webp',
    },
    {
      id: 17,
      rank: 17,
      area: 'kumamoto',
      shop: '熊本ホットポイントヴィラ',
      name: '神代くれな',
      url: 'https://www.hotpoint-villa.cc/detail.php?g_id=546',
      image: '/images/cast/km_villa_kurena.webp',
    },
    {
      id: 18,
      rank: 18,
      area: 'kyoto',
      shop: '京都ホットポイント',
      name: '南 おりな',
      url: 'https://www.hot-point.co.jp/hot/girls_info.php?g_id=6737',
      image: '/images/cast/kt_hot_orina.webp',
    },
    {
      id: 19,
      rank: 19,
      area: 'yokohama',
      shop: 'ミスターダンディ',
      name: '織音 りん',
      url: {
        pc: 'https://www.dandy-g.jp/mr_dandy/detail.php?g_id=6519',
        sp: 'https://www.dandy-g.jp/sp/mr_dandy/g_info_sp.php?g_id=6519',
      },
      image: '/images/cast/yh_mr_rin.webp',
    },
    {
      id: 20,
      rank: 20,
      area: 'kyoto',
      shop: '京都ホットポイントヴィラ',
      name: '神崎　レイ',
      url: 'https://www.hot-point.co.jp/villa/girls_info.php?g_id=4128',
      image: '/images/cast/kt_villa_rei.webp',
    },
  ],
  second: [
    // 他のステージ用
  ],
  // ...
};
