/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { MockFlashLoanRecipient } from "../MockFlashLoanRecipient";

export class MockFlashLoanRecipient__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _vault: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockFlashLoanRecipient> {
    return super.deploy(
      _vault,
      overrides || {}
    ) as Promise<MockFlashLoanRecipient>;
  }
  getDeployTransaction(
    _vault: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_vault, overrides || {});
  }
  attach(address: string): MockFlashLoanRecipient {
    return super.attach(address) as MockFlashLoanRecipient;
  }
  connect(signer: Signer): MockFlashLoanRecipient__factory {
    return super.connect(signer) as MockFlashLoanRecipient__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockFlashLoanRecipient {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MockFlashLoanRecipient;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_vault",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
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
  {
    inputs: [],
    name: "reenter",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "repayInExcess",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "repayLoan",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_reenter",
        type: "bool",
      },
    ],
    name: "setReenter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_repayInExcess",
        type: "bool",
      },
    ],
    name: "setRepayInExcess",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_repayLoan",
        type: "bool",
      },
    ],
    name: "setRepayLoan",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "vault",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b50604051610a38380380610a388339818101604052602081101561003357600080fd5b50516001600160601b031960609190911b166080526000805462ffff001960ff1990911660011716905560805160601c6109b961007f6000398061073f528061078552506109b96000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063b77f3a231161005b578063b77f3a23146100f1578063f04f270714610110578063f966ade71461033a578063fbfa77cf1461034257610088565b80633207ce3c1461008d57806362a82399146100a9578063a0fe97e3146100ca578063a6af1703146100d2575b600080fd5b610095610366565b604080519115158252519081900360200190f35b6100c8600480360360208110156100bf57600080fd5b50351515610374565b005b610095610387565b6100c8600480360360208110156100e857600080fd5b50351515610396565b6100c86004803603602081101561010757600080fd5b503515156103b2565b6100c86004803603608081101561012657600080fd5b810190602081018135600160201b81111561014057600080fd5b82018360208201111561015257600080fd5b803590602001918460208302840111600160201b8311171561017357600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b8111156101c257600080fd5b8201836020820111156101d457600080fd5b803590602001918460208302840111600160201b831117156101f557600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561024457600080fd5b82018360208201111561025657600080fd5b803590602001918460208302840111600160201b8311171561027757600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b8111156102c657600080fd5b8201836020820111156102d857600080fd5b803590602001918460018302840111600160201b831117156102f957600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506103cc945050505050565b61009561077a565b61034a610783565b604080516001600160a01b039092168252519081900360200190f35b600054610100900460ff1681565b6000805460ff1916911515919091179055565b60005462010000900460ff1681565b60008054911515620100000262ff000019909216919091179055565b600080549115156101000261ff0019909216919091179055565b60005b84518110156107735760008582815181106103e657fe5b6020026020010151905060008583815181106103fe57fe5b60200260200101519050600085848151811061041657fe5b6020026020010151905081836001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561046e57600080fd5b505afa158015610482573d6000803e3d6000fd5b505050506040513d602081101561049857600080fd5b5051146104ec576040805162461bcd60e51b815260206004820152601960248201527f494e56414c49445f464c4153484c4f414e5f42414c414e434500000000000000604482015290519081900360640190fd5b60005462010000900460ff161561064b57604051632e1c224f60e11b815230600482018181526080602484019081528b5160848501528b513394635c38449e94938e938e938d936044810191606482019160a401906020808a01910280838360005b8381101561056657818101518382015260200161054e565b50505050905001848103835286818151815260200191508051906020019060200280838360005b838110156105a557818101518382015260200161058d565b50505050905001848103825285818151815260200191508051906020019080838360005b838110156105e15781810151838201526020016105c9565b50505050905090810190601f16801561060e5780820380516001836020036101000a031916815260200191505b50975050505050505050600060405180830381600087803b15801561063257600080fd5b505af1158015610646573d6000803e3d6000fd5b505050505b826001600160a01b03166340c10f1930600060019054906101000a900460ff166106755783610680565b6106808460016107a7565b6040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050600060405180830381600087803b1580156106c657600080fd5b505af11580156106da573d6000803e3d6000fd5b5050505060006106f382846107a790919063ffffffff16565b60005490915060ff166107125761070b8160016107c0565b9050610730565b600054610100900460ff16156107305761072d8160016107a7565b90505b6107646001600160a01b0385167f0000000000000000000000000000000000000000000000000000000000000000836107d6565b505050508060010190506103cf565b5050505050565b60005460ff1681565b7f000000000000000000000000000000000000000000000000000000000000000081565b60008282016107b9848210158361082d565b9392505050565b60006107d083831115600161082d565b50900390565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b17905261082890849061083f565b505050565b8161083b5761083b81610930565b5050565b60006060836001600160a01b0316836040518082805190602001908083835b6020831061087d5780518252601f19909201916020918201910161085e565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146108df576040519150601f19603f3d011682016040523d82523d6000602084013e6108e4565b606091505b509150915060008214156108fc573d6000803e3d6000fd5b61092a815160001480610922575081806020019051602081101561091f57600080fd5b50515b6101a261082d565b50505050565b62461bcd60e51b6000908152602060045260076024526642414c23000030600a808404818106603090810160081b95839006959095019082900491820690940160101b939093010160c81b604452606490fdfea2646970667358221220cd2ff2fd16e69a553100675c7cb3a367aad99fbd978ff291ece47df374666ed364736f6c63430007010033";