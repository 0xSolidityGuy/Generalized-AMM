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

interface LidoPairFactoryInterface extends ethers.utils.Interface {
  functions: {
    "authorize(address)": FunctionFragment;
    "authorized(address)": FunctionFragment;
    "create(address,address,uint256,uint256,uint256,string,string)": FunctionFragment;
    "deauthorize(address)": FunctionFragment;
    "getVault()": FunctionFragment;
    "governance()": FunctionFragment;
    "isAuthorized(address)": FunctionFragment;
    "isPoolFromFactory(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "percentFeeGov()": FunctionFragment;
    "setGov(address)": FunctionFragment;
    "setGovFee(uint256)": FunctionFragment;
    "setOwner(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "authorize", values: [string]): string;
  encodeFunctionData(functionFragment: "authorized", values: [string]): string;
  encodeFunctionData(
    functionFragment: "create",
    values: [
      string,
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      string,
      string
    ]
  ): string;
  encodeFunctionData(functionFragment: "deauthorize", values: [string]): string;
  encodeFunctionData(functionFragment: "getVault", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "governance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isAuthorized",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isPoolFromFactory",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "percentFeeGov",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "setGov", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setGovFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "setOwner", values: [string]): string;

  decodeFunctionResult(functionFragment: "authorize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "authorized", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "create", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "deauthorize",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getVault", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "governance", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isAuthorized",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isPoolFromFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "percentFeeGov",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setGov", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setGovFee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;

  events: {
    "CCPoolCreated(address,address)": EventFragment;
    "PoolCreated(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CCPoolCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PoolCreated"): EventFragment;
}

export class LidoPairFactory extends Contract {
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

  interface: LidoPairFactoryInterface;

  functions: {
    authorize(
      who: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "authorize(address)"(
      who: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    authorized(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    "authorized(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    create(
      _underlying: string,
      _bond: string,
      _expiration: BigNumberish,
      _unitSeconds: BigNumberish,
      _percentFee: BigNumberish,
      _name: string,
      _symbol: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "create(address,address,uint256,uint256,uint256,string,string)"(
      _underlying: string,
      _bond: string,
      _expiration: BigNumberish,
      _unitSeconds: BigNumberish,
      _percentFee: BigNumberish,
      _name: string,
      _symbol: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deauthorize(
      who: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "deauthorize(address)"(
      who: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getVault(overrides?: CallOverrides): Promise<[string]>;

    "getVault()"(overrides?: CallOverrides): Promise<[string]>;

    governance(overrides?: CallOverrides): Promise<[string]>;

    "governance()"(overrides?: CallOverrides): Promise<[string]>;

    isAuthorized(who: string, overrides?: CallOverrides): Promise<[boolean]>;

    "isAuthorized(address)"(
      who: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isPoolFromFactory(
      pool: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "isPoolFromFactory(address)"(
      pool: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    percentFeeGov(overrides?: CallOverrides): Promise<[BigNumber]>;

    "percentFeeGov()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    setGov(
      newGov: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setGov(address)"(
      newGov: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setGovFee(
      newFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setGovFee(uint256)"(
      newFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setOwner(
      who: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setOwner(address)"(
      who: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  authorize(
    who: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "authorize(address)"(
    who: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  authorized(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  "authorized(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  create(
    _underlying: string,
    _bond: string,
    _expiration: BigNumberish,
    _unitSeconds: BigNumberish,
    _percentFee: BigNumberish,
    _name: string,
    _symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "create(address,address,uint256,uint256,uint256,string,string)"(
    _underlying: string,
    _bond: string,
    _expiration: BigNumberish,
    _unitSeconds: BigNumberish,
    _percentFee: BigNumberish,
    _name: string,
    _symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deauthorize(
    who: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "deauthorize(address)"(
    who: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getVault(overrides?: CallOverrides): Promise<string>;

  "getVault()"(overrides?: CallOverrides): Promise<string>;

  governance(overrides?: CallOverrides): Promise<string>;

  "governance()"(overrides?: CallOverrides): Promise<string>;

  isAuthorized(who: string, overrides?: CallOverrides): Promise<boolean>;

  "isAuthorized(address)"(
    who: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isPoolFromFactory(pool: string, overrides?: CallOverrides): Promise<boolean>;

  "isPoolFromFactory(address)"(
    pool: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  percentFeeGov(overrides?: CallOverrides): Promise<BigNumber>;

  "percentFeeGov()"(overrides?: CallOverrides): Promise<BigNumber>;

  setGov(
    newGov: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setGov(address)"(
    newGov: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setGovFee(
    newFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setGovFee(uint256)"(
    newFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setOwner(
    who: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setOwner(address)"(
    who: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    authorize(who: string, overrides?: CallOverrides): Promise<void>;

    "authorize(address)"(who: string, overrides?: CallOverrides): Promise<void>;

    authorized(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    "authorized(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    create(
      _underlying: string,
      _bond: string,
      _expiration: BigNumberish,
      _unitSeconds: BigNumberish,
      _percentFee: BigNumberish,
      _name: string,
      _symbol: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "create(address,address,uint256,uint256,uint256,string,string)"(
      _underlying: string,
      _bond: string,
      _expiration: BigNumberish,
      _unitSeconds: BigNumberish,
      _percentFee: BigNumberish,
      _name: string,
      _symbol: string,
      overrides?: CallOverrides
    ): Promise<string>;

    deauthorize(who: string, overrides?: CallOverrides): Promise<void>;

    "deauthorize(address)"(
      who: string,
      overrides?: CallOverrides
    ): Promise<void>;

    getVault(overrides?: CallOverrides): Promise<string>;

    "getVault()"(overrides?: CallOverrides): Promise<string>;

    governance(overrides?: CallOverrides): Promise<string>;

    "governance()"(overrides?: CallOverrides): Promise<string>;

    isAuthorized(who: string, overrides?: CallOverrides): Promise<boolean>;

    "isAuthorized(address)"(
      who: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isPoolFromFactory(
      pool: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isPoolFromFactory(address)"(
      pool: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    percentFeeGov(overrides?: CallOverrides): Promise<BigNumber>;

    "percentFeeGov()"(overrides?: CallOverrides): Promise<BigNumber>;

    setGov(newGov: string, overrides?: CallOverrides): Promise<void>;

    "setGov(address)"(newGov: string, overrides?: CallOverrides): Promise<void>;

    setGovFee(newFee: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "setGovFee(uint256)"(
      newFee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setOwner(who: string, overrides?: CallOverrides): Promise<void>;

    "setOwner(address)"(who: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    CCPoolCreated(
      pool: string | null,
      bondToken: string | null
    ): TypedEventFilter<[string, string], { pool: string; bondToken: string }>;

    PoolCreated(
      pool: string | null
    ): TypedEventFilter<[string], { pool: string }>;
  };

  estimateGas: {
    authorize(
      who: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "authorize(address)"(
      who: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    authorized(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "authorized(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    create(
      _underlying: string,
      _bond: string,
      _expiration: BigNumberish,
      _unitSeconds: BigNumberish,
      _percentFee: BigNumberish,
      _name: string,
      _symbol: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "create(address,address,uint256,uint256,uint256,string,string)"(
      _underlying: string,
      _bond: string,
      _expiration: BigNumberish,
      _unitSeconds: BigNumberish,
      _percentFee: BigNumberish,
      _name: string,
      _symbol: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deauthorize(
      who: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "deauthorize(address)"(
      who: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getVault(overrides?: CallOverrides): Promise<BigNumber>;

    "getVault()"(overrides?: CallOverrides): Promise<BigNumber>;

    governance(overrides?: CallOverrides): Promise<BigNumber>;

    "governance()"(overrides?: CallOverrides): Promise<BigNumber>;

    isAuthorized(who: string, overrides?: CallOverrides): Promise<BigNumber>;

    "isAuthorized(address)"(
      who: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isPoolFromFactory(
      pool: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isPoolFromFactory(address)"(
      pool: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    percentFeeGov(overrides?: CallOverrides): Promise<BigNumber>;

    "percentFeeGov()"(overrides?: CallOverrides): Promise<BigNumber>;

    setGov(
      newGov: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setGov(address)"(
      newGov: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setGovFee(
      newFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setGovFee(uint256)"(
      newFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setOwner(
      who: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setOwner(address)"(
      who: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    authorize(
      who: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "authorize(address)"(
      who: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    authorized(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "authorized(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    create(
      _underlying: string,
      _bond: string,
      _expiration: BigNumberish,
      _unitSeconds: BigNumberish,
      _percentFee: BigNumberish,
      _name: string,
      _symbol: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "create(address,address,uint256,uint256,uint256,string,string)"(
      _underlying: string,
      _bond: string,
      _expiration: BigNumberish,
      _unitSeconds: BigNumberish,
      _percentFee: BigNumberish,
      _name: string,
      _symbol: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deauthorize(
      who: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "deauthorize(address)"(
      who: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getVault(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getVault()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    governance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "governance()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isAuthorized(
      who: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isAuthorized(address)"(
      who: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isPoolFromFactory(
      pool: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isPoolFromFactory(address)"(
      pool: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    percentFeeGov(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "percentFeeGov()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setGov(
      newGov: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setGov(address)"(
      newGov: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setGovFee(
      newFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setGovFee(uint256)"(
      newFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setOwner(
      who: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setOwner(address)"(
      who: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
