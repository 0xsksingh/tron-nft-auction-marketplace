import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

export function Navbar() {
  const address = useAddress();

  return (
    <div className={styles.navContainer}>
      <nav className={styles.nav}>
        <div className={styles.navLeft}>
          <Link href="/" className={`${styles.homeLink} ${styles.navLeft}`}>
            <Image
              src="/marketplace.png"
              width={48}
              height={48}
              alt="NFT marketplace sample logo"
            />
          </Link>

          <div className={styles.navMiddle}>
            <Link href="/buy" className={styles.link}>
              Buy
            </Link>
            <Link href="/sell" className={styles.link}>
              Sell
            </Link>
            <Link href="/rent" className={styles.link}>
              Rent
            </Link>
          </div>
        </div>

        <div className={styles.navRight}>
          <div className={styles.navConnect}>
            <ConnectWallet theme="dark" btnTitle={"Enter TronNFTHUB"} 
            welcomeScreen={{
              img: {
                src: "https://explorer.bitquery.io/packs/static/node_modules/cryptocurrency-icons/svg/icon/trx-e77d3809c1b59f1aaa42.svg",
                width: 150,
                height: 150,
              },
              title:
                "Your Entry to the world of Tron",
              subtitle: "Connect Wallet to enter 🎉",
            }}
            />
          </div>
          {address && (
            <Link className={styles.link} href={`/profile/${address}`}>
              <Image
                className={styles.profileImage}
                src="/user-icon.png"
                width={42}
                height={42}
                alt="Profile"
              />
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}
