


export function shortenWalletAddress(address: string | undefined, length = 4): string {
  if (!address) {
    return "0x00...0000"
  }
    if (address.length <= length * 2) return address;
  
    const start = address.slice(0, length);
    const end = address.slice(-length);
    return `${start}...${end}`;
  }

  