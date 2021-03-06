/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IFlashLoanRecipient } from "../IFlashLoanRecipient";

export class IFlashLoanRecipient__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IFlashLoanRecipient {
    return new Contract(address, _abi, signerOrProvider) as IFlashLoanRecipient;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20[]",
        name: "tokens",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "feeAmounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "userData",
        type: "bytes",
      },
    ],
    name: "receiveFlashLoan",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
