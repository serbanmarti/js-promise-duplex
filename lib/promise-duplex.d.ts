/// <reference types="node" />

import { PromiseReadable } from 'promise-readable'
import { PromiseWritable } from 'promise-writable'
import * as stream from 'stream'

export declare class PromiseDuplex<TDuplex extends stream.Duplex> extends PromiseReadable<TDuplex> implements PromiseWritable<TDuplex> {
  readonly stream: TDuplex
  readonly readable: PromiseReadable<TDuplex>
  readonly writable: PromiseWritable<TDuplex>

  constructor (stream: TDuplex)

  read (size?: number): Promise<Buffer | undefined>
  readAll (): Promise<Buffer | undefined>

  write (chunk: string | Buffer, encoding?: string): Promise<number>
  writeAll (content: string | Buffer, chunkSize?: number): Promise<number>

  once (event: 'close'): Promise<void>
  once (event: 'end'): Promise<void>
  once (event: 'error'): Promise<void>
  once (event: 'finish'): Promise<void>
  once (event: 'open'): Promise<number>
  once (event: 'pipe'): Promise<NodeJS.ReadableStream>
  once (event: 'unpipe'): Promise<NodeJS.ReadableStream>

  end (): Promise<void>
}

export default PromiseDuplex
