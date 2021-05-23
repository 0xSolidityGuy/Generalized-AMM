/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface MockInternalBalanceRelayerInterface extends ethers.utils.Interface {
  functions: {
    "depositAndWithdraw(address,address,uint256[],uint256[])": FunctionFragment;
    "vault()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "depositAndWithdraw",
    values: [string, string, BigNumberish[], BigNumberish[]]
  ): string;
  encodeFunctionData(functionFragment: "vault", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "depositAndWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "vault", data: BytesLike): Result;

  events: {};
}

export class MockInternalBalanceRelayer extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: MockInternalBalanceRelayerInterface;

  functions: {
    depositAndWithdraw(
      sender: string,
      asset: string,
      depositAmounts: BigNumberish[],
      withdrawAmounts: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "depositAndWithdraw(address,address,uint256[],uint256[])"(
      sender: string,
      asset: string,
      depositAmounts: BigNumberish[],
      withdrawAmounts: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    vault(overrides?: CallOverrides): Promise<[string]>;

    "vault()"(overrides?: CallOverrides): Promise<[string]>;
  };

  depositAndWithdraw(
    sender: string,
    asset: string,
    depositAmounts: BigNumberish[],
    withdrawAmounts: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "depositAndWithdraw(address,address,uint256[],uint256[])"(
    sender: string,
    asset: string,
    depositAmounts: BigNumberish[],
    withdrawAmounts: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  vault(overrides?: CallOverrides): Promise<string>;

  "vault()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    depositAndWithdraw(
      sender: string,
      asset: string,
      depositAmounts: BigNumberish[],
      withdrawAmounts: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    "depositAndWithdraw(address,address,uint256[],uint256[])"(
      sender: string,
      asset: string,
      depositAmounts: BigNumberish[],
      withdrawAmounts: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    vault(overrides?: CallOverrides): Promise<string>;

    "vault()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    depositAndWithdraw(
      sender: string,
      asset: string,
      depositAmounts: BigNumberish[],
      withdrawAmounts: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "depositAndWithdraw(address,address,uint256[],uint256[])"(
      sender: string,
      asset: string,
      depositAmounts: BigNumberish[],
      withdrawAmounts: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    vault(overrides?: CallOverrides): Promise<BigNumber>;

    "vault()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    depositAndWithdraw(
      sender: string,
      asset: string,
      depositAmounts: BigNumberish[],
      withdrawAmounts: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "depositAndWithdraw(address,address,uint256[],uint256[])"(
      sender: string,
      asset: string,
      depositAmounts: BigNumberish[],
      withdrawAmounts: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    vault(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "vault()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}