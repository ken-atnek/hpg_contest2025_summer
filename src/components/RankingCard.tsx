/* =======================================
 * 夏の陣 ランキングカード
 * URL: src/components/RankingCard.tsx
 * Referenced in:  src/components/ContainerRankingTabs.tsx
 * Created: 2025-07-04
 * Last updated: 2025-07-04
 * ======================================= */
'use client';

import { RankingItem } from '@/data/rankingData';
import { castData } from '@/data/castData';
import { stores } from '@/data/storeData';
import { areas } from '@/data/areaData';
import ExternalLink from '@/components/common/ExternalLink';
import Image from 'next/image';
import styles from '@/styles/top.module.scss';
import { useEffect, useState } from 'react';

export default function RankingCard({ item }: { item: RankingItem }) {
  // モバイル判定
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // ① castId からキャスト情報を取得
  const cast = castData.find((c) => c.castId === item.castId);
  if (!cast) {
    return null;
  }

  // ② storeId から店舗情報を取得
  const store = stores.find((s) => s.storeId === cast.storeId);
  const shopColor = store?.shopColor || '#ccc';

  // ③ areaId からエリア情報を取得
  const area = areas.find((a) => a.id === store?.area);
  const areaTitleImage = area?.titleImage || '';

  // ④ URL判定
  let linkUrl = '';
  if (typeof cast.url === 'string') {
    linkUrl = cast.url;
  } else {
    linkUrl = isMobile ? cast.url.sp : cast.url.pc;
  }

  // ⑤ rank表示
  const rankNum = String(item.rank).padStart(2, '0');

  // ⑥ 黒テキスト対応
  const blackTextStoreIds = [
    'kb_hot',
    'club_dandy',
    'fu_hot',
    'kt_hot',
    'hot_point_2',
    'km_villa',
  ];
  const isBlackTextShop = blackTextStoreIds.includes(store?.storeId ?? '');

  // サイズテキスト
  const sizeText = item.size;

  return (
    <div className={styles.rankingCard}>
      <ExternalLink href={linkUrl} className={styles.castLink} />

      <div className={styles.iconRank}>
        <Image
          src={`/images/rank-icon/rank-${rankNum}.webp`}
          alt={`ランク${item.rank}`}
          width={80}
          height={80}
        />
      </div>

      <div
        className={`${styles.wrapHead} ${isBlackTextShop ? styles.blackText : ''}`}
        style={{ backgroundColor: shopColor }}
      >
        <span className={styles.itemArea}>
          {areaTitleImage && (
            <Image
              src={areaTitleImage}
              alt={store?.name ?? 'store'}
              width={40}
              height={40}
              className={styles.itemAreaImage}
            />
          )}
          {area?.nameJp ?? store?.area}
        </span>
        <span className={styles.shop}>{store?.name}</span>
      </div>

      <div className={styles.boxCast}>
        <div className={styles.itemImage}>
          <Image
            src={cast.image}
            alt={cast.name ?? 'cast'}
            width={400}
            height={600}
          />
        </div>
        <div className={styles.wrapProfile}>
          <div className={styles.shopLogo}>
            {store?.logo && (
              <Image
                src={store.logo}
                alt={store.name}
                width={160}
                height={0}
                sizes="100vw"
                style={{ height: 'auto', width: '100%' }}
              />
            )}
          </div>
          <div className={styles.castName}>{cast.name}</div>
          {sizeText && <div className={styles.castSize}>{sizeText}</div>}
        </div>
      </div>
    </div>
  );
}
