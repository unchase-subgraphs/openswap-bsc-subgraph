import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  PairCreated,
  PairRestarted,
  PairShutdowned,
  ParamSet,
  ParamSet2,
  Restarted,
  Shutdowned
} from "../generated/Factory/Factory"

export function createPairCreatedEvent(
  token0: Address,
  token1: Address,
  pair: Address,
  newSize: BigInt
): PairCreated {
  let pairCreatedEvent = changetype<PairCreated>(newMockEvent())

  pairCreatedEvent.parameters = new Array()

  pairCreatedEvent.parameters.push(
    new ethereum.EventParam("token0", ethereum.Value.fromAddress(token0))
  )
  pairCreatedEvent.parameters.push(
    new ethereum.EventParam("token1", ethereum.Value.fromAddress(token1))
  )
  pairCreatedEvent.parameters.push(
    new ethereum.EventParam("pair", ethereum.Value.fromAddress(pair))
  )
  pairCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "newSize",
      ethereum.Value.fromUnsignedBigInt(newSize)
    )
  )

  return pairCreatedEvent
}

export function createPairRestartedEvent(pair: Address): PairRestarted {
  let pairRestartedEvent = changetype<PairRestarted>(newMockEvent())

  pairRestartedEvent.parameters = new Array()

  pairRestartedEvent.parameters.push(
    new ethereum.EventParam("pair", ethereum.Value.fromAddress(pair))
  )

  return pairRestartedEvent
}

export function createPairShutdownedEvent(pair: Address): PairShutdowned {
  let pairShutdownedEvent = changetype<PairShutdowned>(newMockEvent())

  pairShutdownedEvent.parameters = new Array()

  pairShutdownedEvent.parameters.push(
    new ethereum.EventParam("pair", ethereum.Value.fromAddress(pair))
  )

  return pairShutdownedEvent
}

export function createParamSetEvent(name: Bytes, value: Bytes): ParamSet {
  let paramSetEvent = changetype<ParamSet>(newMockEvent())

  paramSetEvent.parameters = new Array()

  paramSetEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromFixedBytes(name))
  )
  paramSetEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromFixedBytes(value))
  )

  return paramSetEvent
}

export function createParamSet2Event(
  name: Bytes,
  value1: Bytes,
  value2: Bytes
): ParamSet2 {
  let paramSet2Event = changetype<ParamSet2>(newMockEvent())

  paramSet2Event.parameters = new Array()

  paramSet2Event.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromFixedBytes(name))
  )
  paramSet2Event.parameters.push(
    new ethereum.EventParam("value1", ethereum.Value.fromFixedBytes(value1))
  )
  paramSet2Event.parameters.push(
    new ethereum.EventParam("value2", ethereum.Value.fromFixedBytes(value2))
  )

  return paramSet2Event
}

export function createRestartedEvent(): Restarted {
  let restartedEvent = changetype<Restarted>(newMockEvent())

  restartedEvent.parameters = new Array()

  return restartedEvent
}

export function createShutdownedEvent(): Shutdowned {
  let shutdownedEvent = changetype<Shutdowned>(newMockEvent())

  shutdownedEvent.parameters = new Array()

  return shutdownedEvent
}
