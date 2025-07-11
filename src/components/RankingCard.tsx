/* =======================================
 * 夏の陣 ランキングカード
 * URL: src/components/RankingCard.tsx
 * Referenced in:  src/components/ContainerRankingTabs.tsx
 * Created: 2025-07-04
 * Last updated: 2025-07-04
 * ======================================= */
'use client';
import { RankingItem } from '@/data/rankingData';
import styles from '@/styles/top.module.scss';
import Image from 'next/image';
import ExternalLink from '@/components/common/ExternalLink';
import { stores } from '@/data/storeData';
import { areas } from '@/data/areaData';
import { useEffect, useState } from 'react';
const blackTextShops = [
  '神戸ホットポイント',
  'クラブダンディ',
  '福岡ホットポイント',
  '京都ホットポイント',
  'ホットポイントパート2',
  '熊本ホットポイントヴィラ',
];

export default function RankingCard({ item }: { item: RankingItem }) {
  // ユーザーエージェント判定
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // 初回実行
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  let linkUrl = '';
  if (typeof item.url === 'string') {
    linkUrl = item.url;
  } else {
    linkUrl = isMobile ? item.url.sp : item.url.pc;
  }

  const store = stores.find((s) => s.name === item.shop);
  const shopColor = store ? store.shopColor : '#ccc';
  const area = areas.find((a) => a.id === item.area);
  const areaTitleImage = area ? area.titleImage : '';
  const rankNum = String(item.rank).padStart(2, '0');

  const isBlackTextShop = blackTextShops.includes(item.shop);

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
              alt={item.area}
              width={40}
              height={40}
              className={styles.itemAreaImage}
            />
          )}
          {area ? area.nameJp : item.area}
        </span>
        <span className={styles.shop}>{item.shop}</span>
      </div>

      <div className={styles.boxCast}>
        <div className={styles.itemImage}>
          <Image src={item.image} alt={item.name} width={400} height={600} />
        </div>
        <div className={styles.wrapProfile}>
          <div className={styles.shopLogo}>
            {store?.logo && (
              <Image
                src={store.logo}
                alt={item.shop}
                width={160}
                height={0}
                sizes="100vw"
                style={{ height: 'auto', width: '100%' }}
              />
            )}
          </div>
          <div className={styles.castName}>{item.name}</div>
          <div className={styles.castSize}>{item.size}</div>
        </div>
      </div>
    </div>
  );
}
