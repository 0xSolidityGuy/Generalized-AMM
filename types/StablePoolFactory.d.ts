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

interface StablePoolFactoryInterface extends ethers.utils.Interface {
  functions: {
    "create(string,string,address[],uint256,uint256,address)": FunctionFragment;
    "getPauseConfiguration()": FunctionFragment;
    "getVault()": FunctionFragment;
    "isPoolFromFactory(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "create",
    values: [string, string, string[], BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getPauseConfiguration",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getVault", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "isPoolFromFactory",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "create", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getPauseConfiguration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getVault", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isPoolFromFactory",
    data: BytesLike
  ): Result;

  events: {
    "PoolCreated(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "PoolCreated"): EventFragment;
}

export class StablePoolFactory extends Contract {
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

  interface: StablePoolFactoryInterface;

  functions: {
    create(
      name: string,
      symbol: string,
      tokens: string[],
      amplificationParameter: BigNumberish,
      swapFeePercentage: BigNumberish,
      owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "create(string,string,address[],uint256,uint256,address)"(
      name: string,
      symbol: string,
      tokens: string[],
      amplificationParameter: BigNumberish,
      swapFeePercentage: BigNumberish,
      owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getPauseConfiguration(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        pauseWindowDuration: BigNumber;
        bufferPeriodDuration: BigNumber;
      }
    >;

    "getPauseConfiguration()"(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        pauseWindowDuration: BigNumber;
        bufferPeriodDuration: BigNumber;
      }
    >;

    getVault(overrides?: CallOverrides): Promise<[string]>;

    "getVault()"(overrides?: CallOverrides): Promise<[string]>;

    isPoolFromFactory(
      pool: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "isPoolFromFactory(address)"(
      pool: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  create(
    name: string,
    symbol: string,
    tokens: string[],
    amplificationParameter: BigNumberish,
    swapFeePercentage: BigNumberish,
    owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "create(string,string,address[],uint256,uint256,address)"(
    name: string,
    symbol: string,
    tokens: string[],
    amplificationParameter: BigNumberish,
    swapFeePercentage: BigNumberish,
    owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getPauseConfiguration(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & {
      pauseWindowDuration: BigNumber;
      bufferPeriodDuration: BigNumber;
    }
  >;

  "getPauseConfiguration()"(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & {
      pauseWindowDuration: BigNumber;
      bufferPeriodDuration: BigNumber;
    }
  >;

  getVault(overrides?: CallOverrides): Promise<string>;

  "getVault()"(overrides?: CallOverrides): Promise<string>;

  isPoolFromFactory(pool: string, overrides?: CallOverrides): Promise<boolean>;

  "isPoolFromFactory(address)"(
    pool: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    create(
      name: string,
      symbol: string,
      tokens: string[],
      amplificationParameter: BigNumberish,
      swapFeePercentage: BigNumberish,
      owner: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "create(string,string,address[],uint256,uint256,address)"(
      name: string,
      symbol: string,
      tokens: string[],
      amplificationParameter: BigNumberish,
      swapFeePercentage: BigNumberish,
      owner: string,
      overrides?: CallOverrides
    ): Promise<string>;

    getPauseConfiguration(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        pauseWindowDuration: BigNumber;
        bufferPeriodDuration: BigNumber;
      }
    >;

    "getPauseConfiguration()"(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        pauseWindowDuration: BigNumber;
        bufferPeriodDuration: BigNumber;
      }
    >;

    getVault(overrides?: CallOverrides): Promise<string>;

    "getVault()"(overrides?: CallOverrides): Promise<string>;

    isPoolFromFactory(
      pool: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isPoolFromFactory(address)"(
      pool: string,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    PoolCreated(
      pool: string | null
    ): TypedEventFilter<[string], { pool: string }>;
  };

  estimateGas: {
    create(
      name: string,
      symbol: string,
      tokens: string[],
      amplificationParameter: BigNumberish,
      swapFeePercentage: BigNumberish,
      owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "create(string,string,address[],uint256,uint256,address)"(
      name: string,
      symbol: string,
      tokens: string[],
      amplificationParameter: BigNumberish,
      swapFeePercentage: BigNumberish,
      owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getPauseConfiguration(overrides?: CallOverrides): Promise<BigNumber>;

    "getPauseConfiguration()"(overrides?: CallOverrides): Promise<BigNumber>;

    getVault(overrides?: CallOverrides): Promise<BigNumber>;

    "getVault()"(overrides?: CallOverrides): Promise<BigNumber>;

    isPoolFromFactory(
      pool: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isPoolFromFactory(address)"(
      pool: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    create(
      name: string,
      symbol: string,
      tokens: string[],
      amplificationParameter: BigNumberish,
      swapFeePercentage: BigNumberish,
      owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "create(string,string,address[],uint256,uint256,address)"(
      name: string,
      symbol: string,
      tokens: string[],
      amplificationParameter: BigNumberish,
      swapFeePercentage: BigNumberish,
      owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getPauseConfiguration(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getPauseConfiguration()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getVault(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getVault()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isPoolFromFactory(
      pool: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isPoolFromFactory(address)"(
      pool: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
