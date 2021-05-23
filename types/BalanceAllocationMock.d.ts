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
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface BalanceAllocationMockInterface extends ethers.utils.Interface {
  functions: {
    "cash(bytes32)": FunctionFragment;
    "cashToManaged(bytes32,uint256)": FunctionFragment;
    "decreaseCash(bytes32,uint256)": FunctionFragment;
    "fromSharedToBalanceA(bytes32,bytes32)": FunctionFragment;
    "fromSharedToBalanceB(bytes32,bytes32)": FunctionFragment;
    "increaseCash(bytes32,uint256)": FunctionFragment;
    "isNotZero(bytes32)": FunctionFragment;
    "isZero(bytes32)": FunctionFragment;
    "lastChangeBlock(bytes32)": FunctionFragment;
    "managed(bytes32)": FunctionFragment;
    "managedToCash(bytes32,uint256)": FunctionFragment;
    "setManaged(bytes32,uint256)": FunctionFragment;
    "toBalance(uint256,uint256,uint256)": FunctionFragment;
    "toSharedCash(bytes32,bytes32)": FunctionFragment;
    "toSharedManaged(bytes32,bytes32)": FunctionFragment;
    "total(bytes32)": FunctionFragment;
    "totals(bytes32[])": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "cash", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "cashToManaged",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "decreaseCash",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "fromSharedToBalanceA",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "fromSharedToBalanceB",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "increaseCash",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isNotZero",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "isZero", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "lastChangeBlock",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "managed", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "managedToCash",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setManaged",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "toBalance",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "toSharedCash",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "toSharedManaged",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "total", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "totals", values: [BytesLike[]]): string;

  decodeFunctionResult(functionFragment: "cash", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "cashToManaged",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "decreaseCash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fromSharedToBalanceA",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fromSharedToBalanceB",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "increaseCash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isNotZero", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isZero", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lastChangeBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "managed", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "managedToCash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setManaged", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "toBalance", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "toSharedCash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "toSharedManaged",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "total", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "totals", data: BytesLike): Result;

  events: {};
}

export class BalanceAllocationMock extends Contract {
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

  interface: BalanceAllocationMockInterface;

  functions: {
    cash(balance: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;

    "cash(bytes32)"(
      balance: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    cashToManaged(
      balance: BytesLike,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "cashToManaged(bytes32,uint256)"(
      balance: BytesLike,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    decreaseCash(
      balance: BytesLike,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "decreaseCash(bytes32,uint256)"(
      balance: BytesLike,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    fromSharedToBalanceA(
      sharedCash: BytesLike,
      sharedManaged: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "fromSharedToBalanceA(bytes32,bytes32)"(
      sharedCash: BytesLike,
      sharedManaged: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    fromSharedToBalanceB(
      sharedCash: BytesLike,
      sharedManaged: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "fromSharedToBalanceB(bytes32,bytes32)"(
      sharedCash: BytesLike,
      sharedManaged: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    increaseCash(
      balance: BytesLike,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "increaseCash(bytes32,uint256)"(
      balance: BytesLike,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    isNotZero(
      balance: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "isNotZero(bytes32)"(
      balance: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isZero(balance: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;

    "isZero(bytes32)"(
      balance: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    lastChangeBlock(
      balance: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "lastChangeBlock(bytes32)"(
      balance: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    managed(
      balance: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "managed(bytes32)"(
      balance: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    managedToCash(
      balance: BytesLike,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "managedToCash(bytes32,uint256)"(
      balance: BytesLike,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    setManaged(
      balance: BytesLike,
      newManaged: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "setManaged(bytes32,uint256)"(
      balance: BytesLike,
      newManaged: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    toBalance(
      _cash: BigNumberish,
      _managed: BigNumberish,
      _lastChangeBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "toBalance(uint256,uint256,uint256)"(
      _cash: BigNumberish,
      _managed: BigNumberish,
      _lastChangeBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    toSharedCash(
      tokenABalance: BytesLike,
      tokenBBalance: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "toSharedCash(bytes32,bytes32)"(
      tokenABalance: BytesLike,
      tokenBBalance: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    toSharedManaged(
      tokenABalance: BytesLike,
      tokenBBalance: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "toSharedManaged(bytes32,bytes32)"(
      tokenABalance: BytesLike,
      tokenBBalance: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    total(balance: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;

    "total(bytes32)"(
      balance: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    totals(
      balances: BytesLike[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]] & { result: BigNumber[] }>;

    "totals(bytes32[])"(
      balances: BytesLike[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]] & { result: BigNumber[] }>;
  };

  cash(balance: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

  "cash(bytes32)"(
    balance: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  cashToManaged(
    balance: BytesLike,
    amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "cashToManaged(bytes32,uint256)"(
    balance: BytesLike,
    amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  decreaseCash(
    balance: BytesLike,
    amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "decreaseCash(bytes32,uint256)"(
    balance: BytesLike,
    amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  fromSharedToBalanceA(
    sharedCash: BytesLike,
    sharedManaged: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  "fromSharedToBalanceA(bytes32,bytes32)"(
    sharedCash: BytesLike,
    sharedManaged: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  fromSharedToBalanceB(
    sharedCash: BytesLike,
    sharedManaged: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  "fromSharedToBalanceB(bytes32,bytes32)"(
    sharedCash: BytesLike,
    sharedManaged: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  increaseCash(
    balance: BytesLike,
    amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "increaseCash(bytes32,uint256)"(
    balance: BytesLike,
    amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  isNotZero(balance: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  "isNotZero(bytes32)"(
    balance: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isZero(balance: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  "isZero(bytes32)"(
    balance: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  lastChangeBlock(
    balance: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "lastChangeBlock(bytes32)"(
    balance: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  managed(balance: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

  "managed(bytes32)"(
    balance: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  managedToCash(
    balance: BytesLike,
    amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "managedToCash(bytes32,uint256)"(
    balance: BytesLike,
    amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  setManaged(
    balance: BytesLike,
    newManaged: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "setManaged(bytes32,uint256)"(
    balance: BytesLike,
    newManaged: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  toBalance(
    _cash: BigNumberish,
    _managed: BigNumberish,
    _lastChangeBlock: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "toBalance(uint256,uint256,uint256)"(
    _cash: BigNumberish,
    _managed: BigNumberish,
    _lastChangeBlock: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  toSharedCash(
    tokenABalance: BytesLike,
    tokenBBalance: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  "toSharedCash(bytes32,bytes32)"(
    tokenABalance: BytesLike,
    tokenBBalance: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  toSharedManaged(
    tokenABalance: BytesLike,
    tokenBBalance: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  "toSharedManaged(bytes32,bytes32)"(
    tokenABalance: BytesLike,
    tokenBBalance: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  total(balance: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

  "total(bytes32)"(
    balance: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  totals(
    balances: BytesLike[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  "totals(bytes32[])"(
    balances: BytesLike[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  callStatic: {
    cash(balance: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    "cash(bytes32)"(
      balance: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    cashToManaged(
      balance: BytesLike,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "cashToManaged(bytes32,uint256)"(
      balance: BytesLike,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    decreaseCash(
      balance: BytesLike,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "decreaseCash(bytes32,uint256)"(
      balance: BytesLike,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    fromSharedToBalanceA(
      sharedCash: BytesLike,
      sharedManaged: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "fromSharedToBalanceA(bytes32,bytes32)"(
      sharedCash: BytesLike,
      sharedManaged: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    fromSharedToBalanceB(
      sharedCash: BytesLike,
      sharedManaged: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "fromSharedToBalanceB(bytes32,bytes32)"(
      sharedCash: BytesLike,
      sharedManaged: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    increaseCash(
      balance: BytesLike,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "increaseCash(bytes32,uint256)"(
      balance: BytesLike,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    isNotZero(balance: BytesLike, overrides?: CallOverrides): Promise<boolean>;

    "isNotZero(bytes32)"(
      balance: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isZero(balance: BytesLike, overrides?: CallOverrides): Promise<boolean>;

    "isZero(bytes32)"(
      balance: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    lastChangeBlock(
      balance: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "lastChangeBlock(bytes32)"(
      balance: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    managed(balance: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    "managed(bytes32)"(
      balance: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    managedToCash(
      balance: BytesLike,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "managedToCash(bytes32,uint256)"(
      balance: BytesLike,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    setManaged(
      balance: BytesLike,
      newManaged: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "setManaged(bytes32,uint256)"(
      balance: BytesLike,
      newManaged: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    toBalance(
      _cash: BigNumberish,
      _managed: BigNumberish,
      _lastChangeBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "toBalance(uint256,uint256,uint256)"(
      _cash: BigNumberish,
      _managed: BigNumberish,
      _lastChangeBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    toSharedCash(
      tokenABalance: BytesLike,
      tokenBBalance: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "toSharedCash(bytes32,bytes32)"(
      tokenABalance: BytesLike,
      tokenBBalance: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    toSharedManaged(
      tokenABalance: BytesLike,
      tokenBBalance: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "toSharedManaged(bytes32,bytes32)"(
      tokenABalance: BytesLike,
      tokenBBalance: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    total(balance: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    "total(bytes32)"(
      balance: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totals(
      balances: BytesLike[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    "totals(bytes32[])"(
      balances: BytesLike[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;
  };

  filters: {};

  estimateGas: {
    cash(balance: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    "cash(bytes32)"(
      balance: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    cashToManaged(
      balance: BytesLike,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "cashToManaged(bytes32,uint256)"(
      balance: BytesLike,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    decreaseCash(
      balance: BytesLike,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "decreaseCash(bytes32,uint256)"(
      balance: BytesLike,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    fromSharedToBalanceA(
      sharedCash: BytesLike,
      sharedManaged: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "fromSharedToBalanceA(bytes32,bytes32)"(
      sharedCash: BytesLike,
      sharedManaged: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    fromSharedToBalanceB(
      sharedCash: BytesLike,
      sharedManaged: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "fromSharedToBalanceB(bytes32,bytes32)"(
      sharedCash: BytesLike,
      sharedManaged: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    increaseCash(
      balance: BytesLike,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "increaseCash(bytes32,uint256)"(
      balance: BytesLike,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isNotZero(
      balance: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isNotZero(bytes32)"(
      balance: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isZero(balance: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    "isZero(bytes32)"(
      balance: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lastChangeBlock(
      balance: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "lastChangeBlock(bytes32)"(
      balance: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    managed(balance: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    "managed(bytes32)"(
      balance: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    managedToCash(
      balance: BytesLike,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "managedToCash(bytes32,uint256)"(
      balance: BytesLike,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setManaged(
      balance: BytesLike,
      newManaged: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "setManaged(bytes32,uint256)"(
      balance: BytesLike,
      newManaged: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    toBalance(
      _cash: BigNumberish,
      _managed: BigNumberish,
      _lastChangeBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "toBalance(uint256,uint256,uint256)"(
      _cash: BigNumberish,
      _managed: BigNumberish,
      _lastChangeBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    toSharedCash(
      tokenABalance: BytesLike,
      tokenBBalance: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "toSharedCash(bytes32,bytes32)"(
      tokenABalance: BytesLike,
      tokenBBalance: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    toSharedManaged(
      tokenABalance: BytesLike,
      tokenBBalance: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "toSharedManaged(bytes32,bytes32)"(
      tokenABalance: BytesLike,
      tokenBBalance: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    total(balance: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    "total(bytes32)"(
      balance: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totals(
      balances: BytesLike[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "totals(bytes32[])"(
      balances: BytesLike[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    cash(
      balance: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "cash(bytes32)"(
      balance: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    cashToManaged(
      balance: BytesLike,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "cashToManaged(bytes32,uint256)"(
      balance: BytesLike,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    decreaseCash(
      balance: BytesLike,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "decreaseCash(bytes32,uint256)"(
      balance: BytesLike,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    fromSharedToBalanceA(
      sharedCash: BytesLike,
      sharedManaged: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "fromSharedToBalanceA(bytes32,bytes32)"(
      sharedCash: BytesLike,
      sharedManaged: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    fromSharedToBalanceB(
      sharedCash: BytesLike,
      sharedManaged: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "fromSharedToBalanceB(bytes32,bytes32)"(
      sharedCash: BytesLike,
      sharedManaged: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    increaseCash(
      balance: BytesLike,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "increaseCash(bytes32,uint256)"(
      balance: BytesLike,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isNotZero(
      balance: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isNotZero(bytes32)"(
      balance: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isZero(
      balance: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isZero(bytes32)"(
      balance: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lastChangeBlock(
      balance: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "lastChangeBlock(bytes32)"(
      balance: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    managed(
      balance: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "managed(bytes32)"(
      balance: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    managedToCash(
      balance: BytesLike,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "managedToCash(bytes32,uint256)"(
      balance: BytesLike,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setManaged(
      balance: BytesLike,
      newManaged: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "setManaged(bytes32,uint256)"(
      balance: BytesLike,
      newManaged: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    toBalance(
      _cash: BigNumberish,
      _managed: BigNumberish,
      _lastChangeBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "toBalance(uint256,uint256,uint256)"(
      _cash: BigNumberish,
      _managed: BigNumberish,
      _lastChangeBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    toSharedCash(
      tokenABalance: BytesLike,
      tokenBBalance: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "toSharedCash(bytes32,bytes32)"(
      tokenABalance: BytesLike,
      tokenBBalance: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    toSharedManaged(
      tokenABalance: BytesLike,
      tokenBBalance: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "toSharedManaged(bytes32,bytes32)"(
      tokenABalance: BytesLike,
      tokenBBalance: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    total(
      balance: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "total(bytes32)"(
      balance: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totals(
      balances: BytesLike[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "totals(bytes32[])"(
      balances: BytesLike[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
