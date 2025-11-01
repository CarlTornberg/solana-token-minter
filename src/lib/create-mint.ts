import {Connection, Keypair, PublicKey} from '@solana/web3.js';
import {Mint, mintTo, createMint, createMintToCheckedInstruction} from '@solana/spl-token';
import { Console } from 'console';
import devKey from '/home/bob/.config/solana/devkey.json';

const wallet = Keypair.fromSecretKey(new Uint8Array(devKey));

async function createNewMint(signer: Keypair) {
  const conn = new Connection("https://api-devnet.solana.com", "confirmed");
  const bal = await conn.getBalance(devKey.publicKey);
  Console.console.log(devKey.publicKey, "'s balance: ", bal);
 asdf 
}

await createNewMint(wallet);
