import { ConnectButton } from "thirdweb/react";
import { createWallet, embeddedWallet } from "thirdweb/wallets";

const wallets = [
  embeddedWallet(),
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
  createWallet("me.rainbow"),
];

function Example() {
  return (
    <div>
      <ConnectButton client={client} wallets={wallets} />
    </div>
  );
}
