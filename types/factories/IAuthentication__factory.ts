/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IAuthentication } from "../IAuthentication";

export class IAuthentication__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IAuthentication {
    return new Contract(address, _abi, signerOrProvider) as IAuthentication;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "selector",
        type: "bytes4",
      },
    ],
    name: "getActionId",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
