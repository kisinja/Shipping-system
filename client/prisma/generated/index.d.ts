
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Container
 * 
 */
export type Container = $Result.DefaultSelection<Prisma.$ContainerPayload>
/**
 * Model Shipment
 * 
 */
export type Shipment = $Result.DefaultSelection<Prisma.$ShipmentPayload>
/**
 * Model GpsUpdate
 * 
 */
export type GpsUpdate = $Result.DefaultSelection<Prisma.$GpsUpdatePayload>
/**
 * Model Goods
 * 
 */
export type Goods = $Result.DefaultSelection<Prisma.$GoodsPayload>
/**
 * Model Log
 * 
 */
export type Log = $Result.DefaultSelection<Prisma.$LogPayload>
/**
 * Model Document
 * 
 */
export type Document = $Result.DefaultSelection<Prisma.$DocumentPayload>
/**
 * Model Port
 * 
 */
export type Port = $Result.DefaultSelection<Prisma.$PortPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ContainerStatus: {
  AVAILABLE: 'AVAILABLE',
  BOOKED: 'BOOKED',
  IN_TRANSIT: 'IN_TRANSIT',
  READY_FOR_SHIPMENT: 'READY_FOR_SHIPMENT',
  AT_PORT: 'AT_PORT',
  DELIVERED: 'DELIVERED',
  MAINTENANCE: 'MAINTENANCE'
};

export type ContainerStatus = (typeof ContainerStatus)[keyof typeof ContainerStatus]


export const ShipmentStatus: {
  PENDING: 'PENDING',
  IN_TRANSIT: 'IN_TRANSIT',
  AT_PORT: 'AT_PORT',
  CUSTOMS_HOLD: 'CUSTOMS_HOLD',
  DELIVERED: 'DELIVERED',
  CANCELLED: 'CANCELLED'
};

export type ShipmentStatus = (typeof ShipmentStatus)[keyof typeof ShipmentStatus]

}

export type ContainerStatus = $Enums.ContainerStatus

export const ContainerStatus: typeof $Enums.ContainerStatus

export type ShipmentStatus = $Enums.ShipmentStatus

export const ShipmentStatus: typeof $Enums.ShipmentStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Containers
 * const containers = await prisma.container.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Containers
   * const containers = await prisma.container.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.container`: Exposes CRUD operations for the **Container** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Containers
    * const containers = await prisma.container.findMany()
    * ```
    */
  get container(): Prisma.ContainerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shipment`: Exposes CRUD operations for the **Shipment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shipments
    * const shipments = await prisma.shipment.findMany()
    * ```
    */
  get shipment(): Prisma.ShipmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gpsUpdate`: Exposes CRUD operations for the **GpsUpdate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GpsUpdates
    * const gpsUpdates = await prisma.gpsUpdate.findMany()
    * ```
    */
  get gpsUpdate(): Prisma.GpsUpdateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.goods`: Exposes CRUD operations for the **Goods** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Goods
    * const goods = await prisma.goods.findMany()
    * ```
    */
  get goods(): Prisma.GoodsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.log`: Exposes CRUD operations for the **Log** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Logs
    * const logs = await prisma.log.findMany()
    * ```
    */
  get log(): Prisma.LogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.document`: Exposes CRUD operations for the **Document** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Documents
    * const documents = await prisma.document.findMany()
    * ```
    */
  get document(): Prisma.DocumentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.port`: Exposes CRUD operations for the **Port** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ports
    * const ports = await prisma.port.findMany()
    * ```
    */
  get port(): Prisma.PortDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Container: 'Container',
    Shipment: 'Shipment',
    GpsUpdate: 'GpsUpdate',
    Goods: 'Goods',
    Log: 'Log',
    Document: 'Document',
    Port: 'Port'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "container" | "shipment" | "gpsUpdate" | "goods" | "log" | "document" | "port"
      txIsolationLevel: never
    }
    model: {
      Container: {
        payload: Prisma.$ContainerPayload<ExtArgs>
        fields: Prisma.ContainerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContainerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContainerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContainerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContainerPayload>
          }
          findFirst: {
            args: Prisma.ContainerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContainerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContainerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContainerPayload>
          }
          findMany: {
            args: Prisma.ContainerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContainerPayload>[]
          }
          create: {
            args: Prisma.ContainerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContainerPayload>
          }
          createMany: {
            args: Prisma.ContainerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ContainerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContainerPayload>
          }
          update: {
            args: Prisma.ContainerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContainerPayload>
          }
          deleteMany: {
            args: Prisma.ContainerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContainerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ContainerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContainerPayload>
          }
          aggregate: {
            args: Prisma.ContainerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContainer>
          }
          groupBy: {
            args: Prisma.ContainerGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContainerGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ContainerFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ContainerAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ContainerCountArgs<ExtArgs>
            result: $Utils.Optional<ContainerCountAggregateOutputType> | number
          }
        }
      }
      Shipment: {
        payload: Prisma.$ShipmentPayload<ExtArgs>
        fields: Prisma.ShipmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShipmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShipmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>
          }
          findFirst: {
            args: Prisma.ShipmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShipmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>
          }
          findMany: {
            args: Prisma.ShipmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>[]
          }
          create: {
            args: Prisma.ShipmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>
          }
          createMany: {
            args: Prisma.ShipmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ShipmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>
          }
          update: {
            args: Prisma.ShipmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>
          }
          deleteMany: {
            args: Prisma.ShipmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShipmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ShipmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>
          }
          aggregate: {
            args: Prisma.ShipmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShipment>
          }
          groupBy: {
            args: Prisma.ShipmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShipmentGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ShipmentFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ShipmentAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ShipmentCountArgs<ExtArgs>
            result: $Utils.Optional<ShipmentCountAggregateOutputType> | number
          }
        }
      }
      GpsUpdate: {
        payload: Prisma.$GpsUpdatePayload<ExtArgs>
        fields: Prisma.GpsUpdateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GpsUpdateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GpsUpdatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GpsUpdateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GpsUpdatePayload>
          }
          findFirst: {
            args: Prisma.GpsUpdateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GpsUpdatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GpsUpdateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GpsUpdatePayload>
          }
          findMany: {
            args: Prisma.GpsUpdateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GpsUpdatePayload>[]
          }
          create: {
            args: Prisma.GpsUpdateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GpsUpdatePayload>
          }
          createMany: {
            args: Prisma.GpsUpdateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GpsUpdateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GpsUpdatePayload>
          }
          update: {
            args: Prisma.GpsUpdateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GpsUpdatePayload>
          }
          deleteMany: {
            args: Prisma.GpsUpdateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GpsUpdateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GpsUpdateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GpsUpdatePayload>
          }
          aggregate: {
            args: Prisma.GpsUpdateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGpsUpdate>
          }
          groupBy: {
            args: Prisma.GpsUpdateGroupByArgs<ExtArgs>
            result: $Utils.Optional<GpsUpdateGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.GpsUpdateFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.GpsUpdateAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.GpsUpdateCountArgs<ExtArgs>
            result: $Utils.Optional<GpsUpdateCountAggregateOutputType> | number
          }
        }
      }
      Goods: {
        payload: Prisma.$GoodsPayload<ExtArgs>
        fields: Prisma.GoodsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GoodsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoodsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GoodsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoodsPayload>
          }
          findFirst: {
            args: Prisma.GoodsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoodsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GoodsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoodsPayload>
          }
          findMany: {
            args: Prisma.GoodsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoodsPayload>[]
          }
          create: {
            args: Prisma.GoodsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoodsPayload>
          }
          createMany: {
            args: Prisma.GoodsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GoodsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoodsPayload>
          }
          update: {
            args: Prisma.GoodsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoodsPayload>
          }
          deleteMany: {
            args: Prisma.GoodsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GoodsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GoodsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoodsPayload>
          }
          aggregate: {
            args: Prisma.GoodsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGoods>
          }
          groupBy: {
            args: Prisma.GoodsGroupByArgs<ExtArgs>
            result: $Utils.Optional<GoodsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.GoodsFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.GoodsAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.GoodsCountArgs<ExtArgs>
            result: $Utils.Optional<GoodsCountAggregateOutputType> | number
          }
        }
      }
      Log: {
        payload: Prisma.$LogPayload<ExtArgs>
        fields: Prisma.LogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          findFirst: {
            args: Prisma.LogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          findMany: {
            args: Prisma.LogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>[]
          }
          create: {
            args: Prisma.LogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          createMany: {
            args: Prisma.LogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          update: {
            args: Prisma.LogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          deleteMany: {
            args: Prisma.LogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          aggregate: {
            args: Prisma.LogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLog>
          }
          groupBy: {
            args: Prisma.LogGroupByArgs<ExtArgs>
            result: $Utils.Optional<LogGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.LogFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.LogAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.LogCountArgs<ExtArgs>
            result: $Utils.Optional<LogCountAggregateOutputType> | number
          }
        }
      }
      Document: {
        payload: Prisma.$DocumentPayload<ExtArgs>
        fields: Prisma.DocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findFirst: {
            args: Prisma.DocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findMany: {
            args: Prisma.DocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          create: {
            args: Prisma.DocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          createMany: {
            args: Prisma.DocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          update: {
            args: Prisma.DocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          deleteMany: {
            args: Prisma.DocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          aggregate: {
            args: Prisma.DocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocument>
          }
          groupBy: {
            args: Prisma.DocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.DocumentFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.DocumentAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.DocumentCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentCountAggregateOutputType> | number
          }
        }
      }
      Port: {
        payload: Prisma.$PortPayload<ExtArgs>
        fields: Prisma.PortFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PortFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PortFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortPayload>
          }
          findFirst: {
            args: Prisma.PortFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PortFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortPayload>
          }
          findMany: {
            args: Prisma.PortFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortPayload>[]
          }
          create: {
            args: Prisma.PortCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortPayload>
          }
          createMany: {
            args: Prisma.PortCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PortDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortPayload>
          }
          update: {
            args: Prisma.PortUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortPayload>
          }
          deleteMany: {
            args: Prisma.PortDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PortUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PortUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortPayload>
          }
          aggregate: {
            args: Prisma.PortAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePort>
          }
          groupBy: {
            args: Prisma.PortGroupByArgs<ExtArgs>
            result: $Utils.Optional<PortGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.PortFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.PortAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.PortCountArgs<ExtArgs>
            result: $Utils.Optional<PortCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    container?: ContainerOmit
    shipment?: ShipmentOmit
    gpsUpdate?: GpsUpdateOmit
    goods?: GoodsOmit
    log?: LogOmit
    document?: DocumentOmit
    port?: PortOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ContainerCountOutputType
   */

  export type ContainerCountOutputType = {
    goods: number
  }

  export type ContainerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    goods?: boolean | ContainerCountOutputTypeCountGoodsArgs
  }

  // Custom InputTypes
  /**
   * ContainerCountOutputType without action
   */
  export type ContainerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContainerCountOutputType
     */
    select?: ContainerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ContainerCountOutputType without action
   */
  export type ContainerCountOutputTypeCountGoodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GoodsWhereInput
  }


  /**
   * Count Type ShipmentCountOutputType
   */

  export type ShipmentCountOutputType = {
    logs: number
    documents: number
    Goods: number
    gpsUpdates: number
  }

  export type ShipmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    logs?: boolean | ShipmentCountOutputTypeCountLogsArgs
    documents?: boolean | ShipmentCountOutputTypeCountDocumentsArgs
    Goods?: boolean | ShipmentCountOutputTypeCountGoodsArgs
    gpsUpdates?: boolean | ShipmentCountOutputTypeCountGpsUpdatesArgs
  }

  // Custom InputTypes
  /**
   * ShipmentCountOutputType without action
   */
  export type ShipmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentCountOutputType
     */
    select?: ShipmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShipmentCountOutputType without action
   */
  export type ShipmentCountOutputTypeCountLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogWhereInput
  }

  /**
   * ShipmentCountOutputType without action
   */
  export type ShipmentCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
  }

  /**
   * ShipmentCountOutputType without action
   */
  export type ShipmentCountOutputTypeCountGoodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GoodsWhereInput
  }

  /**
   * ShipmentCountOutputType without action
   */
  export type ShipmentCountOutputTypeCountGpsUpdatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GpsUpdateWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Container
   */

  export type AggregateContainer = {
    _count: ContainerCountAggregateOutputType | null
    _min: ContainerMinAggregateOutputType | null
    _max: ContainerMaxAggregateOutputType | null
  }

  export type ContainerMinAggregateOutputType = {
    id: string | null
    containerId: string | null
    size: string | null
    type: string | null
    currentPort: string | null
    status: $Enums.ContainerStatus | null
    bookingDate: Date | null
    userId: string | null
    shipmentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContainerMaxAggregateOutputType = {
    id: string | null
    containerId: string | null
    size: string | null
    type: string | null
    currentPort: string | null
    status: $Enums.ContainerStatus | null
    bookingDate: Date | null
    userId: string | null
    shipmentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContainerCountAggregateOutputType = {
    id: number
    containerId: number
    size: number
    type: number
    currentPort: number
    status: number
    bookingDate: number
    userId: number
    shipmentId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContainerMinAggregateInputType = {
    id?: true
    containerId?: true
    size?: true
    type?: true
    currentPort?: true
    status?: true
    bookingDate?: true
    userId?: true
    shipmentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContainerMaxAggregateInputType = {
    id?: true
    containerId?: true
    size?: true
    type?: true
    currentPort?: true
    status?: true
    bookingDate?: true
    userId?: true
    shipmentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContainerCountAggregateInputType = {
    id?: true
    containerId?: true
    size?: true
    type?: true
    currentPort?: true
    status?: true
    bookingDate?: true
    userId?: true
    shipmentId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContainerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Container to aggregate.
     */
    where?: ContainerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Containers to fetch.
     */
    orderBy?: ContainerOrderByWithRelationInput | ContainerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContainerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Containers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Containers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Containers
    **/
    _count?: true | ContainerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContainerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContainerMaxAggregateInputType
  }

  export type GetContainerAggregateType<T extends ContainerAggregateArgs> = {
        [P in keyof T & keyof AggregateContainer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContainer[P]>
      : GetScalarType<T[P], AggregateContainer[P]>
  }




  export type ContainerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContainerWhereInput
    orderBy?: ContainerOrderByWithAggregationInput | ContainerOrderByWithAggregationInput[]
    by: ContainerScalarFieldEnum[] | ContainerScalarFieldEnum
    having?: ContainerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContainerCountAggregateInputType | true
    _min?: ContainerMinAggregateInputType
    _max?: ContainerMaxAggregateInputType
  }

  export type ContainerGroupByOutputType = {
    id: string
    containerId: string
    size: string
    type: string
    currentPort: string
    status: $Enums.ContainerStatus
    bookingDate: Date | null
    userId: string | null
    shipmentId: string | null
    createdAt: Date
    updatedAt: Date
    _count: ContainerCountAggregateOutputType | null
    _min: ContainerMinAggregateOutputType | null
    _max: ContainerMaxAggregateOutputType | null
  }

  type GetContainerGroupByPayload<T extends ContainerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContainerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContainerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContainerGroupByOutputType[P]>
            : GetScalarType<T[P], ContainerGroupByOutputType[P]>
        }
      >
    >


  export type ContainerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    containerId?: boolean
    size?: boolean
    type?: boolean
    currentPort?: boolean
    status?: boolean
    bookingDate?: boolean
    userId?: boolean
    shipmentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shipment?: boolean | Container$shipmentArgs<ExtArgs>
    goods?: boolean | Container$goodsArgs<ExtArgs>
    _count?: boolean | ContainerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["container"]>



  export type ContainerSelectScalar = {
    id?: boolean
    containerId?: boolean
    size?: boolean
    type?: boolean
    currentPort?: boolean
    status?: boolean
    bookingDate?: boolean
    userId?: boolean
    shipmentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContainerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "containerId" | "size" | "type" | "currentPort" | "status" | "bookingDate" | "userId" | "shipmentId" | "createdAt" | "updatedAt", ExtArgs["result"]["container"]>
  export type ContainerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shipment?: boolean | Container$shipmentArgs<ExtArgs>
    goods?: boolean | Container$goodsArgs<ExtArgs>
    _count?: boolean | ContainerCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ContainerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Container"
    objects: {
      shipment: Prisma.$ShipmentPayload<ExtArgs> | null
      goods: Prisma.$GoodsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      containerId: string
      size: string
      type: string
      currentPort: string
      status: $Enums.ContainerStatus
      bookingDate: Date | null
      userId: string | null
      shipmentId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["container"]>
    composites: {}
  }

  type ContainerGetPayload<S extends boolean | null | undefined | ContainerDefaultArgs> = $Result.GetResult<Prisma.$ContainerPayload, S>

  type ContainerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContainerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContainerCountAggregateInputType | true
    }

  export interface ContainerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Container'], meta: { name: 'Container' } }
    /**
     * Find zero or one Container that matches the filter.
     * @param {ContainerFindUniqueArgs} args - Arguments to find a Container
     * @example
     * // Get one Container
     * const container = await prisma.container.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContainerFindUniqueArgs>(args: SelectSubset<T, ContainerFindUniqueArgs<ExtArgs>>): Prisma__ContainerClient<$Result.GetResult<Prisma.$ContainerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Container that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContainerFindUniqueOrThrowArgs} args - Arguments to find a Container
     * @example
     * // Get one Container
     * const container = await prisma.container.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContainerFindUniqueOrThrowArgs>(args: SelectSubset<T, ContainerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContainerClient<$Result.GetResult<Prisma.$ContainerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Container that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContainerFindFirstArgs} args - Arguments to find a Container
     * @example
     * // Get one Container
     * const container = await prisma.container.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContainerFindFirstArgs>(args?: SelectSubset<T, ContainerFindFirstArgs<ExtArgs>>): Prisma__ContainerClient<$Result.GetResult<Prisma.$ContainerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Container that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContainerFindFirstOrThrowArgs} args - Arguments to find a Container
     * @example
     * // Get one Container
     * const container = await prisma.container.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContainerFindFirstOrThrowArgs>(args?: SelectSubset<T, ContainerFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContainerClient<$Result.GetResult<Prisma.$ContainerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Containers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContainerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Containers
     * const containers = await prisma.container.findMany()
     * 
     * // Get first 10 Containers
     * const containers = await prisma.container.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const containerWithIdOnly = await prisma.container.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContainerFindManyArgs>(args?: SelectSubset<T, ContainerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContainerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Container.
     * @param {ContainerCreateArgs} args - Arguments to create a Container.
     * @example
     * // Create one Container
     * const Container = await prisma.container.create({
     *   data: {
     *     // ... data to create a Container
     *   }
     * })
     * 
     */
    create<T extends ContainerCreateArgs>(args: SelectSubset<T, ContainerCreateArgs<ExtArgs>>): Prisma__ContainerClient<$Result.GetResult<Prisma.$ContainerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Containers.
     * @param {ContainerCreateManyArgs} args - Arguments to create many Containers.
     * @example
     * // Create many Containers
     * const container = await prisma.container.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContainerCreateManyArgs>(args?: SelectSubset<T, ContainerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Container.
     * @param {ContainerDeleteArgs} args - Arguments to delete one Container.
     * @example
     * // Delete one Container
     * const Container = await prisma.container.delete({
     *   where: {
     *     // ... filter to delete one Container
     *   }
     * })
     * 
     */
    delete<T extends ContainerDeleteArgs>(args: SelectSubset<T, ContainerDeleteArgs<ExtArgs>>): Prisma__ContainerClient<$Result.GetResult<Prisma.$ContainerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Container.
     * @param {ContainerUpdateArgs} args - Arguments to update one Container.
     * @example
     * // Update one Container
     * const container = await prisma.container.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContainerUpdateArgs>(args: SelectSubset<T, ContainerUpdateArgs<ExtArgs>>): Prisma__ContainerClient<$Result.GetResult<Prisma.$ContainerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Containers.
     * @param {ContainerDeleteManyArgs} args - Arguments to filter Containers to delete.
     * @example
     * // Delete a few Containers
     * const { count } = await prisma.container.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContainerDeleteManyArgs>(args?: SelectSubset<T, ContainerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Containers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContainerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Containers
     * const container = await prisma.container.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContainerUpdateManyArgs>(args: SelectSubset<T, ContainerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Container.
     * @param {ContainerUpsertArgs} args - Arguments to update or create a Container.
     * @example
     * // Update or create a Container
     * const container = await prisma.container.upsert({
     *   create: {
     *     // ... data to create a Container
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Container we want to update
     *   }
     * })
     */
    upsert<T extends ContainerUpsertArgs>(args: SelectSubset<T, ContainerUpsertArgs<ExtArgs>>): Prisma__ContainerClient<$Result.GetResult<Prisma.$ContainerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Containers that matches the filter.
     * @param {ContainerFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const container = await prisma.container.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ContainerFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Container.
     * @param {ContainerAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const container = await prisma.container.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ContainerAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Containers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContainerCountArgs} args - Arguments to filter Containers to count.
     * @example
     * // Count the number of Containers
     * const count = await prisma.container.count({
     *   where: {
     *     // ... the filter for the Containers we want to count
     *   }
     * })
    **/
    count<T extends ContainerCountArgs>(
      args?: Subset<T, ContainerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContainerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Container.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContainerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContainerAggregateArgs>(args: Subset<T, ContainerAggregateArgs>): Prisma.PrismaPromise<GetContainerAggregateType<T>>

    /**
     * Group by Container.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContainerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContainerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContainerGroupByArgs['orderBy'] }
        : { orderBy?: ContainerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContainerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContainerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Container model
   */
  readonly fields: ContainerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Container.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContainerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shipment<T extends Container$shipmentArgs<ExtArgs> = {}>(args?: Subset<T, Container$shipmentArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    goods<T extends Container$goodsArgs<ExtArgs> = {}>(args?: Subset<T, Container$goodsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoodsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Container model
   */
  interface ContainerFieldRefs {
    readonly id: FieldRef<"Container", 'String'>
    readonly containerId: FieldRef<"Container", 'String'>
    readonly size: FieldRef<"Container", 'String'>
    readonly type: FieldRef<"Container", 'String'>
    readonly currentPort: FieldRef<"Container", 'String'>
    readonly status: FieldRef<"Container", 'ContainerStatus'>
    readonly bookingDate: FieldRef<"Container", 'DateTime'>
    readonly userId: FieldRef<"Container", 'String'>
    readonly shipmentId: FieldRef<"Container", 'String'>
    readonly createdAt: FieldRef<"Container", 'DateTime'>
    readonly updatedAt: FieldRef<"Container", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Container findUnique
   */
  export type ContainerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Container
     */
    select?: ContainerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Container
     */
    omit?: ContainerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContainerInclude<ExtArgs> | null
    /**
     * Filter, which Container to fetch.
     */
    where: ContainerWhereUniqueInput
  }

  /**
   * Container findUniqueOrThrow
   */
  export type ContainerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Container
     */
    select?: ContainerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Container
     */
    omit?: ContainerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContainerInclude<ExtArgs> | null
    /**
     * Filter, which Container to fetch.
     */
    where: ContainerWhereUniqueInput
  }

  /**
   * Container findFirst
   */
  export type ContainerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Container
     */
    select?: ContainerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Container
     */
    omit?: ContainerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContainerInclude<ExtArgs> | null
    /**
     * Filter, which Container to fetch.
     */
    where?: ContainerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Containers to fetch.
     */
    orderBy?: ContainerOrderByWithRelationInput | ContainerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Containers.
     */
    cursor?: ContainerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Containers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Containers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Containers.
     */
    distinct?: ContainerScalarFieldEnum | ContainerScalarFieldEnum[]
  }

  /**
   * Container findFirstOrThrow
   */
  export type ContainerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Container
     */
    select?: ContainerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Container
     */
    omit?: ContainerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContainerInclude<ExtArgs> | null
    /**
     * Filter, which Container to fetch.
     */
    where?: ContainerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Containers to fetch.
     */
    orderBy?: ContainerOrderByWithRelationInput | ContainerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Containers.
     */
    cursor?: ContainerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Containers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Containers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Containers.
     */
    distinct?: ContainerScalarFieldEnum | ContainerScalarFieldEnum[]
  }

  /**
   * Container findMany
   */
  export type ContainerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Container
     */
    select?: ContainerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Container
     */
    omit?: ContainerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContainerInclude<ExtArgs> | null
    /**
     * Filter, which Containers to fetch.
     */
    where?: ContainerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Containers to fetch.
     */
    orderBy?: ContainerOrderByWithRelationInput | ContainerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Containers.
     */
    cursor?: ContainerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Containers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Containers.
     */
    skip?: number
    distinct?: ContainerScalarFieldEnum | ContainerScalarFieldEnum[]
  }

  /**
   * Container create
   */
  export type ContainerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Container
     */
    select?: ContainerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Container
     */
    omit?: ContainerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContainerInclude<ExtArgs> | null
    /**
     * The data needed to create a Container.
     */
    data: XOR<ContainerCreateInput, ContainerUncheckedCreateInput>
  }

  /**
   * Container createMany
   */
  export type ContainerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Containers.
     */
    data: ContainerCreateManyInput | ContainerCreateManyInput[]
  }

  /**
   * Container update
   */
  export type ContainerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Container
     */
    select?: ContainerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Container
     */
    omit?: ContainerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContainerInclude<ExtArgs> | null
    /**
     * The data needed to update a Container.
     */
    data: XOR<ContainerUpdateInput, ContainerUncheckedUpdateInput>
    /**
     * Choose, which Container to update.
     */
    where: ContainerWhereUniqueInput
  }

  /**
   * Container updateMany
   */
  export type ContainerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Containers.
     */
    data: XOR<ContainerUpdateManyMutationInput, ContainerUncheckedUpdateManyInput>
    /**
     * Filter which Containers to update
     */
    where?: ContainerWhereInput
    /**
     * Limit how many Containers to update.
     */
    limit?: number
  }

  /**
   * Container upsert
   */
  export type ContainerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Container
     */
    select?: ContainerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Container
     */
    omit?: ContainerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContainerInclude<ExtArgs> | null
    /**
     * The filter to search for the Container to update in case it exists.
     */
    where: ContainerWhereUniqueInput
    /**
     * In case the Container found by the `where` argument doesn't exist, create a new Container with this data.
     */
    create: XOR<ContainerCreateInput, ContainerUncheckedCreateInput>
    /**
     * In case the Container was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContainerUpdateInput, ContainerUncheckedUpdateInput>
  }

  /**
   * Container delete
   */
  export type ContainerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Container
     */
    select?: ContainerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Container
     */
    omit?: ContainerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContainerInclude<ExtArgs> | null
    /**
     * Filter which Container to delete.
     */
    where: ContainerWhereUniqueInput
  }

  /**
   * Container deleteMany
   */
  export type ContainerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Containers to delete
     */
    where?: ContainerWhereInput
    /**
     * Limit how many Containers to delete.
     */
    limit?: number
  }

  /**
   * Container findRaw
   */
  export type ContainerFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Container aggregateRaw
   */
  export type ContainerAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Container.shipment
   */
  export type Container$shipmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    where?: ShipmentWhereInput
  }

  /**
   * Container.goods
   */
  export type Container$goodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goods
     */
    select?: GoodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goods
     */
    omit?: GoodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoodsInclude<ExtArgs> | null
    where?: GoodsWhereInput
    orderBy?: GoodsOrderByWithRelationInput | GoodsOrderByWithRelationInput[]
    cursor?: GoodsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GoodsScalarFieldEnum | GoodsScalarFieldEnum[]
  }

  /**
   * Container without action
   */
  export type ContainerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Container
     */
    select?: ContainerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Container
     */
    omit?: ContainerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContainerInclude<ExtArgs> | null
  }


  /**
   * Model Shipment
   */

  export type AggregateShipment = {
    _count: ShipmentCountAggregateOutputType | null
    _avg: ShipmentAvgAggregateOutputType | null
    _sum: ShipmentSumAggregateOutputType | null
    _min: ShipmentMinAggregateOutputType | null
    _max: ShipmentMaxAggregateOutputType | null
  }

  export type ShipmentAvgAggregateOutputType = {
    currentLatitude: number | null
    currentLongitude: number | null
  }

  export type ShipmentSumAggregateOutputType = {
    currentLatitude: number | null
    currentLongitude: number | null
  }

  export type ShipmentMinAggregateOutputType = {
    id: string | null
    shipmentCode: string | null
    origin: string | null
    destination: string | null
    currentPort: string | null
    status: $Enums.ShipmentStatus | null
    departureDate: Date | null
    estimatedArrival: Date | null
    actualArrival: Date | null
    containerId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    currentLatitude: number | null
    currentLongitude: number | null
  }

  export type ShipmentMaxAggregateOutputType = {
    id: string | null
    shipmentCode: string | null
    origin: string | null
    destination: string | null
    currentPort: string | null
    status: $Enums.ShipmentStatus | null
    departureDate: Date | null
    estimatedArrival: Date | null
    actualArrival: Date | null
    containerId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    currentLatitude: number | null
    currentLongitude: number | null
  }

  export type ShipmentCountAggregateOutputType = {
    id: number
    shipmentCode: number
    origin: number
    destination: number
    currentPort: number
    status: number
    departureDate: number
    estimatedArrival: number
    actualArrival: number
    containerId: number
    userId: number
    createdAt: number
    updatedAt: number
    currentLatitude: number
    currentLongitude: number
    _all: number
  }


  export type ShipmentAvgAggregateInputType = {
    currentLatitude?: true
    currentLongitude?: true
  }

  export type ShipmentSumAggregateInputType = {
    currentLatitude?: true
    currentLongitude?: true
  }

  export type ShipmentMinAggregateInputType = {
    id?: true
    shipmentCode?: true
    origin?: true
    destination?: true
    currentPort?: true
    status?: true
    departureDate?: true
    estimatedArrival?: true
    actualArrival?: true
    containerId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    currentLatitude?: true
    currentLongitude?: true
  }

  export type ShipmentMaxAggregateInputType = {
    id?: true
    shipmentCode?: true
    origin?: true
    destination?: true
    currentPort?: true
    status?: true
    departureDate?: true
    estimatedArrival?: true
    actualArrival?: true
    containerId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    currentLatitude?: true
    currentLongitude?: true
  }

  export type ShipmentCountAggregateInputType = {
    id?: true
    shipmentCode?: true
    origin?: true
    destination?: true
    currentPort?: true
    status?: true
    departureDate?: true
    estimatedArrival?: true
    actualArrival?: true
    containerId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    currentLatitude?: true
    currentLongitude?: true
    _all?: true
  }

  export type ShipmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shipment to aggregate.
     */
    where?: ShipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shipments to fetch.
     */
    orderBy?: ShipmentOrderByWithRelationInput | ShipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shipments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shipments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Shipments
    **/
    _count?: true | ShipmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShipmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShipmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShipmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShipmentMaxAggregateInputType
  }

  export type GetShipmentAggregateType<T extends ShipmentAggregateArgs> = {
        [P in keyof T & keyof AggregateShipment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShipment[P]>
      : GetScalarType<T[P], AggregateShipment[P]>
  }




  export type ShipmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShipmentWhereInput
    orderBy?: ShipmentOrderByWithAggregationInput | ShipmentOrderByWithAggregationInput[]
    by: ShipmentScalarFieldEnum[] | ShipmentScalarFieldEnum
    having?: ShipmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShipmentCountAggregateInputType | true
    _avg?: ShipmentAvgAggregateInputType
    _sum?: ShipmentSumAggregateInputType
    _min?: ShipmentMinAggregateInputType
    _max?: ShipmentMaxAggregateInputType
  }

  export type ShipmentGroupByOutputType = {
    id: string
    shipmentCode: string
    origin: string
    destination: string
    currentPort: string
    status: $Enums.ShipmentStatus
    departureDate: Date | null
    estimatedArrival: Date | null
    actualArrival: Date | null
    containerId: string
    userId: string
    createdAt: Date
    updatedAt: Date
    currentLatitude: number | null
    currentLongitude: number | null
    _count: ShipmentCountAggregateOutputType | null
    _avg: ShipmentAvgAggregateOutputType | null
    _sum: ShipmentSumAggregateOutputType | null
    _min: ShipmentMinAggregateOutputType | null
    _max: ShipmentMaxAggregateOutputType | null
  }

  type GetShipmentGroupByPayload<T extends ShipmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShipmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShipmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShipmentGroupByOutputType[P]>
            : GetScalarType<T[P], ShipmentGroupByOutputType[P]>
        }
      >
    >


  export type ShipmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shipmentCode?: boolean
    origin?: boolean
    destination?: boolean
    currentPort?: boolean
    status?: boolean
    departureDate?: boolean
    estimatedArrival?: boolean
    actualArrival?: boolean
    containerId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    currentLatitude?: boolean
    currentLongitude?: boolean
    container?: boolean | ContainerDefaultArgs<ExtArgs>
    logs?: boolean | Shipment$logsArgs<ExtArgs>
    documents?: boolean | Shipment$documentsArgs<ExtArgs>
    Goods?: boolean | Shipment$GoodsArgs<ExtArgs>
    gpsUpdates?: boolean | Shipment$gpsUpdatesArgs<ExtArgs>
    _count?: boolean | ShipmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shipment"]>



  export type ShipmentSelectScalar = {
    id?: boolean
    shipmentCode?: boolean
    origin?: boolean
    destination?: boolean
    currentPort?: boolean
    status?: boolean
    departureDate?: boolean
    estimatedArrival?: boolean
    actualArrival?: boolean
    containerId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    currentLatitude?: boolean
    currentLongitude?: boolean
  }

  export type ShipmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shipmentCode" | "origin" | "destination" | "currentPort" | "status" | "departureDate" | "estimatedArrival" | "actualArrival" | "containerId" | "userId" | "createdAt" | "updatedAt" | "currentLatitude" | "currentLongitude", ExtArgs["result"]["shipment"]>
  export type ShipmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    container?: boolean | ContainerDefaultArgs<ExtArgs>
    logs?: boolean | Shipment$logsArgs<ExtArgs>
    documents?: boolean | Shipment$documentsArgs<ExtArgs>
    Goods?: boolean | Shipment$GoodsArgs<ExtArgs>
    gpsUpdates?: boolean | Shipment$gpsUpdatesArgs<ExtArgs>
    _count?: boolean | ShipmentCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ShipmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Shipment"
    objects: {
      container: Prisma.$ContainerPayload<ExtArgs>
      logs: Prisma.$LogPayload<ExtArgs>[]
      documents: Prisma.$DocumentPayload<ExtArgs>[]
      Goods: Prisma.$GoodsPayload<ExtArgs>[]
      gpsUpdates: Prisma.$GpsUpdatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shipmentCode: string
      origin: string
      destination: string
      currentPort: string
      status: $Enums.ShipmentStatus
      departureDate: Date | null
      estimatedArrival: Date | null
      actualArrival: Date | null
      containerId: string
      userId: string
      createdAt: Date
      updatedAt: Date
      /**
       * *
       *    * For Live tracking
       */
      currentLatitude: number | null
      currentLongitude: number | null
    }, ExtArgs["result"]["shipment"]>
    composites: {}
  }

  type ShipmentGetPayload<S extends boolean | null | undefined | ShipmentDefaultArgs> = $Result.GetResult<Prisma.$ShipmentPayload, S>

  type ShipmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShipmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShipmentCountAggregateInputType | true
    }

  export interface ShipmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Shipment'], meta: { name: 'Shipment' } }
    /**
     * Find zero or one Shipment that matches the filter.
     * @param {ShipmentFindUniqueArgs} args - Arguments to find a Shipment
     * @example
     * // Get one Shipment
     * const shipment = await prisma.shipment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShipmentFindUniqueArgs>(args: SelectSubset<T, ShipmentFindUniqueArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Shipment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShipmentFindUniqueOrThrowArgs} args - Arguments to find a Shipment
     * @example
     * // Get one Shipment
     * const shipment = await prisma.shipment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShipmentFindUniqueOrThrowArgs>(args: SelectSubset<T, ShipmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shipment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentFindFirstArgs} args - Arguments to find a Shipment
     * @example
     * // Get one Shipment
     * const shipment = await prisma.shipment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShipmentFindFirstArgs>(args?: SelectSubset<T, ShipmentFindFirstArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shipment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentFindFirstOrThrowArgs} args - Arguments to find a Shipment
     * @example
     * // Get one Shipment
     * const shipment = await prisma.shipment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShipmentFindFirstOrThrowArgs>(args?: SelectSubset<T, ShipmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Shipments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shipments
     * const shipments = await prisma.shipment.findMany()
     * 
     * // Get first 10 Shipments
     * const shipments = await prisma.shipment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shipmentWithIdOnly = await prisma.shipment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShipmentFindManyArgs>(args?: SelectSubset<T, ShipmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Shipment.
     * @param {ShipmentCreateArgs} args - Arguments to create a Shipment.
     * @example
     * // Create one Shipment
     * const Shipment = await prisma.shipment.create({
     *   data: {
     *     // ... data to create a Shipment
     *   }
     * })
     * 
     */
    create<T extends ShipmentCreateArgs>(args: SelectSubset<T, ShipmentCreateArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Shipments.
     * @param {ShipmentCreateManyArgs} args - Arguments to create many Shipments.
     * @example
     * // Create many Shipments
     * const shipment = await prisma.shipment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShipmentCreateManyArgs>(args?: SelectSubset<T, ShipmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Shipment.
     * @param {ShipmentDeleteArgs} args - Arguments to delete one Shipment.
     * @example
     * // Delete one Shipment
     * const Shipment = await prisma.shipment.delete({
     *   where: {
     *     // ... filter to delete one Shipment
     *   }
     * })
     * 
     */
    delete<T extends ShipmentDeleteArgs>(args: SelectSubset<T, ShipmentDeleteArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Shipment.
     * @param {ShipmentUpdateArgs} args - Arguments to update one Shipment.
     * @example
     * // Update one Shipment
     * const shipment = await prisma.shipment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShipmentUpdateArgs>(args: SelectSubset<T, ShipmentUpdateArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Shipments.
     * @param {ShipmentDeleteManyArgs} args - Arguments to filter Shipments to delete.
     * @example
     * // Delete a few Shipments
     * const { count } = await prisma.shipment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShipmentDeleteManyArgs>(args?: SelectSubset<T, ShipmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shipments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shipments
     * const shipment = await prisma.shipment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShipmentUpdateManyArgs>(args: SelectSubset<T, ShipmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Shipment.
     * @param {ShipmentUpsertArgs} args - Arguments to update or create a Shipment.
     * @example
     * // Update or create a Shipment
     * const shipment = await prisma.shipment.upsert({
     *   create: {
     *     // ... data to create a Shipment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shipment we want to update
     *   }
     * })
     */
    upsert<T extends ShipmentUpsertArgs>(args: SelectSubset<T, ShipmentUpsertArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Shipments that matches the filter.
     * @param {ShipmentFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const shipment = await prisma.shipment.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ShipmentFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Shipment.
     * @param {ShipmentAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const shipment = await prisma.shipment.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ShipmentAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Shipments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentCountArgs} args - Arguments to filter Shipments to count.
     * @example
     * // Count the number of Shipments
     * const count = await prisma.shipment.count({
     *   where: {
     *     // ... the filter for the Shipments we want to count
     *   }
     * })
    **/
    count<T extends ShipmentCountArgs>(
      args?: Subset<T, ShipmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShipmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Shipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShipmentAggregateArgs>(args: Subset<T, ShipmentAggregateArgs>): Prisma.PrismaPromise<GetShipmentAggregateType<T>>

    /**
     * Group by Shipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShipmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShipmentGroupByArgs['orderBy'] }
        : { orderBy?: ShipmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShipmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShipmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Shipment model
   */
  readonly fields: ShipmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Shipment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShipmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    container<T extends ContainerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContainerDefaultArgs<ExtArgs>>): Prisma__ContainerClient<$Result.GetResult<Prisma.$ContainerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    logs<T extends Shipment$logsArgs<ExtArgs> = {}>(args?: Subset<T, Shipment$logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    documents<T extends Shipment$documentsArgs<ExtArgs> = {}>(args?: Subset<T, Shipment$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Goods<T extends Shipment$GoodsArgs<ExtArgs> = {}>(args?: Subset<T, Shipment$GoodsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoodsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    gpsUpdates<T extends Shipment$gpsUpdatesArgs<ExtArgs> = {}>(args?: Subset<T, Shipment$gpsUpdatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GpsUpdatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Shipment model
   */
  interface ShipmentFieldRefs {
    readonly id: FieldRef<"Shipment", 'String'>
    readonly shipmentCode: FieldRef<"Shipment", 'String'>
    readonly origin: FieldRef<"Shipment", 'String'>
    readonly destination: FieldRef<"Shipment", 'String'>
    readonly currentPort: FieldRef<"Shipment", 'String'>
    readonly status: FieldRef<"Shipment", 'ShipmentStatus'>
    readonly departureDate: FieldRef<"Shipment", 'DateTime'>
    readonly estimatedArrival: FieldRef<"Shipment", 'DateTime'>
    readonly actualArrival: FieldRef<"Shipment", 'DateTime'>
    readonly containerId: FieldRef<"Shipment", 'String'>
    readonly userId: FieldRef<"Shipment", 'String'>
    readonly createdAt: FieldRef<"Shipment", 'DateTime'>
    readonly updatedAt: FieldRef<"Shipment", 'DateTime'>
    readonly currentLatitude: FieldRef<"Shipment", 'Float'>
    readonly currentLongitude: FieldRef<"Shipment", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Shipment findUnique
   */
  export type ShipmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * Filter, which Shipment to fetch.
     */
    where: ShipmentWhereUniqueInput
  }

  /**
   * Shipment findUniqueOrThrow
   */
  export type ShipmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * Filter, which Shipment to fetch.
     */
    where: ShipmentWhereUniqueInput
  }

  /**
   * Shipment findFirst
   */
  export type ShipmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * Filter, which Shipment to fetch.
     */
    where?: ShipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shipments to fetch.
     */
    orderBy?: ShipmentOrderByWithRelationInput | ShipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shipments.
     */
    cursor?: ShipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shipments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shipments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shipments.
     */
    distinct?: ShipmentScalarFieldEnum | ShipmentScalarFieldEnum[]
  }

  /**
   * Shipment findFirstOrThrow
   */
  export type ShipmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * Filter, which Shipment to fetch.
     */
    where?: ShipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shipments to fetch.
     */
    orderBy?: ShipmentOrderByWithRelationInput | ShipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shipments.
     */
    cursor?: ShipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shipments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shipments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shipments.
     */
    distinct?: ShipmentScalarFieldEnum | ShipmentScalarFieldEnum[]
  }

  /**
   * Shipment findMany
   */
  export type ShipmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * Filter, which Shipments to fetch.
     */
    where?: ShipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shipments to fetch.
     */
    orderBy?: ShipmentOrderByWithRelationInput | ShipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Shipments.
     */
    cursor?: ShipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shipments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shipments.
     */
    skip?: number
    distinct?: ShipmentScalarFieldEnum | ShipmentScalarFieldEnum[]
  }

  /**
   * Shipment create
   */
  export type ShipmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Shipment.
     */
    data: XOR<ShipmentCreateInput, ShipmentUncheckedCreateInput>
  }

  /**
   * Shipment createMany
   */
  export type ShipmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Shipments.
     */
    data: ShipmentCreateManyInput | ShipmentCreateManyInput[]
  }

  /**
   * Shipment update
   */
  export type ShipmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Shipment.
     */
    data: XOR<ShipmentUpdateInput, ShipmentUncheckedUpdateInput>
    /**
     * Choose, which Shipment to update.
     */
    where: ShipmentWhereUniqueInput
  }

  /**
   * Shipment updateMany
   */
  export type ShipmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Shipments.
     */
    data: XOR<ShipmentUpdateManyMutationInput, ShipmentUncheckedUpdateManyInput>
    /**
     * Filter which Shipments to update
     */
    where?: ShipmentWhereInput
    /**
     * Limit how many Shipments to update.
     */
    limit?: number
  }

  /**
   * Shipment upsert
   */
  export type ShipmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Shipment to update in case it exists.
     */
    where: ShipmentWhereUniqueInput
    /**
     * In case the Shipment found by the `where` argument doesn't exist, create a new Shipment with this data.
     */
    create: XOR<ShipmentCreateInput, ShipmentUncheckedCreateInput>
    /**
     * In case the Shipment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShipmentUpdateInput, ShipmentUncheckedUpdateInput>
  }

  /**
   * Shipment delete
   */
  export type ShipmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * Filter which Shipment to delete.
     */
    where: ShipmentWhereUniqueInput
  }

  /**
   * Shipment deleteMany
   */
  export type ShipmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shipments to delete
     */
    where?: ShipmentWhereInput
    /**
     * Limit how many Shipments to delete.
     */
    limit?: number
  }

  /**
   * Shipment findRaw
   */
  export type ShipmentFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Shipment aggregateRaw
   */
  export type ShipmentAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Shipment.logs
   */
  export type Shipment$logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    where?: LogWhereInput
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    cursor?: LogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * Shipment.documents
   */
  export type Shipment$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    cursor?: DocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Shipment.Goods
   */
  export type Shipment$GoodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goods
     */
    select?: GoodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goods
     */
    omit?: GoodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoodsInclude<ExtArgs> | null
    where?: GoodsWhereInput
    orderBy?: GoodsOrderByWithRelationInput | GoodsOrderByWithRelationInput[]
    cursor?: GoodsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GoodsScalarFieldEnum | GoodsScalarFieldEnum[]
  }

  /**
   * Shipment.gpsUpdates
   */
  export type Shipment$gpsUpdatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GpsUpdate
     */
    select?: GpsUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GpsUpdate
     */
    omit?: GpsUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GpsUpdateInclude<ExtArgs> | null
    where?: GpsUpdateWhereInput
    orderBy?: GpsUpdateOrderByWithRelationInput | GpsUpdateOrderByWithRelationInput[]
    cursor?: GpsUpdateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GpsUpdateScalarFieldEnum | GpsUpdateScalarFieldEnum[]
  }

  /**
   * Shipment without action
   */
  export type ShipmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
  }


  /**
   * Model GpsUpdate
   */

  export type AggregateGpsUpdate = {
    _count: GpsUpdateCountAggregateOutputType | null
    _avg: GpsUpdateAvgAggregateOutputType | null
    _sum: GpsUpdateSumAggregateOutputType | null
    _min: GpsUpdateMinAggregateOutputType | null
    _max: GpsUpdateMaxAggregateOutputType | null
  }

  export type GpsUpdateAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    speed: number | null
    heading: number | null
  }

  export type GpsUpdateSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    speed: number | null
    heading: number | null
  }

  export type GpsUpdateMinAggregateOutputType = {
    id: string | null
    shipmentId: string | null
    latitude: number | null
    longitude: number | null
    timestamp: Date | null
    speed: number | null
    heading: number | null
  }

  export type GpsUpdateMaxAggregateOutputType = {
    id: string | null
    shipmentId: string | null
    latitude: number | null
    longitude: number | null
    timestamp: Date | null
    speed: number | null
    heading: number | null
  }

  export type GpsUpdateCountAggregateOutputType = {
    id: number
    shipmentId: number
    latitude: number
    longitude: number
    timestamp: number
    speed: number
    heading: number
    _all: number
  }


  export type GpsUpdateAvgAggregateInputType = {
    latitude?: true
    longitude?: true
    speed?: true
    heading?: true
  }

  export type GpsUpdateSumAggregateInputType = {
    latitude?: true
    longitude?: true
    speed?: true
    heading?: true
  }

  export type GpsUpdateMinAggregateInputType = {
    id?: true
    shipmentId?: true
    latitude?: true
    longitude?: true
    timestamp?: true
    speed?: true
    heading?: true
  }

  export type GpsUpdateMaxAggregateInputType = {
    id?: true
    shipmentId?: true
    latitude?: true
    longitude?: true
    timestamp?: true
    speed?: true
    heading?: true
  }

  export type GpsUpdateCountAggregateInputType = {
    id?: true
    shipmentId?: true
    latitude?: true
    longitude?: true
    timestamp?: true
    speed?: true
    heading?: true
    _all?: true
  }

  export type GpsUpdateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GpsUpdate to aggregate.
     */
    where?: GpsUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GpsUpdates to fetch.
     */
    orderBy?: GpsUpdateOrderByWithRelationInput | GpsUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GpsUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GpsUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GpsUpdates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GpsUpdates
    **/
    _count?: true | GpsUpdateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GpsUpdateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GpsUpdateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GpsUpdateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GpsUpdateMaxAggregateInputType
  }

  export type GetGpsUpdateAggregateType<T extends GpsUpdateAggregateArgs> = {
        [P in keyof T & keyof AggregateGpsUpdate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGpsUpdate[P]>
      : GetScalarType<T[P], AggregateGpsUpdate[P]>
  }




  export type GpsUpdateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GpsUpdateWhereInput
    orderBy?: GpsUpdateOrderByWithAggregationInput | GpsUpdateOrderByWithAggregationInput[]
    by: GpsUpdateScalarFieldEnum[] | GpsUpdateScalarFieldEnum
    having?: GpsUpdateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GpsUpdateCountAggregateInputType | true
    _avg?: GpsUpdateAvgAggregateInputType
    _sum?: GpsUpdateSumAggregateInputType
    _min?: GpsUpdateMinAggregateInputType
    _max?: GpsUpdateMaxAggregateInputType
  }

  export type GpsUpdateGroupByOutputType = {
    id: string
    shipmentId: string
    latitude: number
    longitude: number
    timestamp: Date
    speed: number | null
    heading: number | null
    _count: GpsUpdateCountAggregateOutputType | null
    _avg: GpsUpdateAvgAggregateOutputType | null
    _sum: GpsUpdateSumAggregateOutputType | null
    _min: GpsUpdateMinAggregateOutputType | null
    _max: GpsUpdateMaxAggregateOutputType | null
  }

  type GetGpsUpdateGroupByPayload<T extends GpsUpdateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GpsUpdateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GpsUpdateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GpsUpdateGroupByOutputType[P]>
            : GetScalarType<T[P], GpsUpdateGroupByOutputType[P]>
        }
      >
    >


  export type GpsUpdateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shipmentId?: boolean
    latitude?: boolean
    longitude?: boolean
    timestamp?: boolean
    speed?: boolean
    heading?: boolean
    shipment?: boolean | ShipmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gpsUpdate"]>



  export type GpsUpdateSelectScalar = {
    id?: boolean
    shipmentId?: boolean
    latitude?: boolean
    longitude?: boolean
    timestamp?: boolean
    speed?: boolean
    heading?: boolean
  }

  export type GpsUpdateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shipmentId" | "latitude" | "longitude" | "timestamp" | "speed" | "heading", ExtArgs["result"]["gpsUpdate"]>
  export type GpsUpdateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shipment?: boolean | ShipmentDefaultArgs<ExtArgs>
  }

  export type $GpsUpdatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GpsUpdate"
    objects: {
      shipment: Prisma.$ShipmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shipmentId: string
      latitude: number
      longitude: number
      timestamp: Date
      speed: number | null
      heading: number | null
    }, ExtArgs["result"]["gpsUpdate"]>
    composites: {}
  }

  type GpsUpdateGetPayload<S extends boolean | null | undefined | GpsUpdateDefaultArgs> = $Result.GetResult<Prisma.$GpsUpdatePayload, S>

  type GpsUpdateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GpsUpdateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GpsUpdateCountAggregateInputType | true
    }

  export interface GpsUpdateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GpsUpdate'], meta: { name: 'GpsUpdate' } }
    /**
     * Find zero or one GpsUpdate that matches the filter.
     * @param {GpsUpdateFindUniqueArgs} args - Arguments to find a GpsUpdate
     * @example
     * // Get one GpsUpdate
     * const gpsUpdate = await prisma.gpsUpdate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GpsUpdateFindUniqueArgs>(args: SelectSubset<T, GpsUpdateFindUniqueArgs<ExtArgs>>): Prisma__GpsUpdateClient<$Result.GetResult<Prisma.$GpsUpdatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GpsUpdate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GpsUpdateFindUniqueOrThrowArgs} args - Arguments to find a GpsUpdate
     * @example
     * // Get one GpsUpdate
     * const gpsUpdate = await prisma.gpsUpdate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GpsUpdateFindUniqueOrThrowArgs>(args: SelectSubset<T, GpsUpdateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GpsUpdateClient<$Result.GetResult<Prisma.$GpsUpdatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GpsUpdate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GpsUpdateFindFirstArgs} args - Arguments to find a GpsUpdate
     * @example
     * // Get one GpsUpdate
     * const gpsUpdate = await prisma.gpsUpdate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GpsUpdateFindFirstArgs>(args?: SelectSubset<T, GpsUpdateFindFirstArgs<ExtArgs>>): Prisma__GpsUpdateClient<$Result.GetResult<Prisma.$GpsUpdatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GpsUpdate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GpsUpdateFindFirstOrThrowArgs} args - Arguments to find a GpsUpdate
     * @example
     * // Get one GpsUpdate
     * const gpsUpdate = await prisma.gpsUpdate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GpsUpdateFindFirstOrThrowArgs>(args?: SelectSubset<T, GpsUpdateFindFirstOrThrowArgs<ExtArgs>>): Prisma__GpsUpdateClient<$Result.GetResult<Prisma.$GpsUpdatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GpsUpdates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GpsUpdateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GpsUpdates
     * const gpsUpdates = await prisma.gpsUpdate.findMany()
     * 
     * // Get first 10 GpsUpdates
     * const gpsUpdates = await prisma.gpsUpdate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gpsUpdateWithIdOnly = await prisma.gpsUpdate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GpsUpdateFindManyArgs>(args?: SelectSubset<T, GpsUpdateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GpsUpdatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GpsUpdate.
     * @param {GpsUpdateCreateArgs} args - Arguments to create a GpsUpdate.
     * @example
     * // Create one GpsUpdate
     * const GpsUpdate = await prisma.gpsUpdate.create({
     *   data: {
     *     // ... data to create a GpsUpdate
     *   }
     * })
     * 
     */
    create<T extends GpsUpdateCreateArgs>(args: SelectSubset<T, GpsUpdateCreateArgs<ExtArgs>>): Prisma__GpsUpdateClient<$Result.GetResult<Prisma.$GpsUpdatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GpsUpdates.
     * @param {GpsUpdateCreateManyArgs} args - Arguments to create many GpsUpdates.
     * @example
     * // Create many GpsUpdates
     * const gpsUpdate = await prisma.gpsUpdate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GpsUpdateCreateManyArgs>(args?: SelectSubset<T, GpsUpdateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GpsUpdate.
     * @param {GpsUpdateDeleteArgs} args - Arguments to delete one GpsUpdate.
     * @example
     * // Delete one GpsUpdate
     * const GpsUpdate = await prisma.gpsUpdate.delete({
     *   where: {
     *     // ... filter to delete one GpsUpdate
     *   }
     * })
     * 
     */
    delete<T extends GpsUpdateDeleteArgs>(args: SelectSubset<T, GpsUpdateDeleteArgs<ExtArgs>>): Prisma__GpsUpdateClient<$Result.GetResult<Prisma.$GpsUpdatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GpsUpdate.
     * @param {GpsUpdateUpdateArgs} args - Arguments to update one GpsUpdate.
     * @example
     * // Update one GpsUpdate
     * const gpsUpdate = await prisma.gpsUpdate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GpsUpdateUpdateArgs>(args: SelectSubset<T, GpsUpdateUpdateArgs<ExtArgs>>): Prisma__GpsUpdateClient<$Result.GetResult<Prisma.$GpsUpdatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GpsUpdates.
     * @param {GpsUpdateDeleteManyArgs} args - Arguments to filter GpsUpdates to delete.
     * @example
     * // Delete a few GpsUpdates
     * const { count } = await prisma.gpsUpdate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GpsUpdateDeleteManyArgs>(args?: SelectSubset<T, GpsUpdateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GpsUpdates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GpsUpdateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GpsUpdates
     * const gpsUpdate = await prisma.gpsUpdate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GpsUpdateUpdateManyArgs>(args: SelectSubset<T, GpsUpdateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GpsUpdate.
     * @param {GpsUpdateUpsertArgs} args - Arguments to update or create a GpsUpdate.
     * @example
     * // Update or create a GpsUpdate
     * const gpsUpdate = await prisma.gpsUpdate.upsert({
     *   create: {
     *     // ... data to create a GpsUpdate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GpsUpdate we want to update
     *   }
     * })
     */
    upsert<T extends GpsUpdateUpsertArgs>(args: SelectSubset<T, GpsUpdateUpsertArgs<ExtArgs>>): Prisma__GpsUpdateClient<$Result.GetResult<Prisma.$GpsUpdatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GpsUpdates that matches the filter.
     * @param {GpsUpdateFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const gpsUpdate = await prisma.gpsUpdate.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: GpsUpdateFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a GpsUpdate.
     * @param {GpsUpdateAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const gpsUpdate = await prisma.gpsUpdate.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: GpsUpdateAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of GpsUpdates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GpsUpdateCountArgs} args - Arguments to filter GpsUpdates to count.
     * @example
     * // Count the number of GpsUpdates
     * const count = await prisma.gpsUpdate.count({
     *   where: {
     *     // ... the filter for the GpsUpdates we want to count
     *   }
     * })
    **/
    count<T extends GpsUpdateCountArgs>(
      args?: Subset<T, GpsUpdateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GpsUpdateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GpsUpdate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GpsUpdateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GpsUpdateAggregateArgs>(args: Subset<T, GpsUpdateAggregateArgs>): Prisma.PrismaPromise<GetGpsUpdateAggregateType<T>>

    /**
     * Group by GpsUpdate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GpsUpdateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GpsUpdateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GpsUpdateGroupByArgs['orderBy'] }
        : { orderBy?: GpsUpdateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GpsUpdateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGpsUpdateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GpsUpdate model
   */
  readonly fields: GpsUpdateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GpsUpdate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GpsUpdateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shipment<T extends ShipmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShipmentDefaultArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GpsUpdate model
   */
  interface GpsUpdateFieldRefs {
    readonly id: FieldRef<"GpsUpdate", 'String'>
    readonly shipmentId: FieldRef<"GpsUpdate", 'String'>
    readonly latitude: FieldRef<"GpsUpdate", 'Float'>
    readonly longitude: FieldRef<"GpsUpdate", 'Float'>
    readonly timestamp: FieldRef<"GpsUpdate", 'DateTime'>
    readonly speed: FieldRef<"GpsUpdate", 'Float'>
    readonly heading: FieldRef<"GpsUpdate", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * GpsUpdate findUnique
   */
  export type GpsUpdateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GpsUpdate
     */
    select?: GpsUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GpsUpdate
     */
    omit?: GpsUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GpsUpdateInclude<ExtArgs> | null
    /**
     * Filter, which GpsUpdate to fetch.
     */
    where: GpsUpdateWhereUniqueInput
  }

  /**
   * GpsUpdate findUniqueOrThrow
   */
  export type GpsUpdateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GpsUpdate
     */
    select?: GpsUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GpsUpdate
     */
    omit?: GpsUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GpsUpdateInclude<ExtArgs> | null
    /**
     * Filter, which GpsUpdate to fetch.
     */
    where: GpsUpdateWhereUniqueInput
  }

  /**
   * GpsUpdate findFirst
   */
  export type GpsUpdateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GpsUpdate
     */
    select?: GpsUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GpsUpdate
     */
    omit?: GpsUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GpsUpdateInclude<ExtArgs> | null
    /**
     * Filter, which GpsUpdate to fetch.
     */
    where?: GpsUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GpsUpdates to fetch.
     */
    orderBy?: GpsUpdateOrderByWithRelationInput | GpsUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GpsUpdates.
     */
    cursor?: GpsUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GpsUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GpsUpdates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GpsUpdates.
     */
    distinct?: GpsUpdateScalarFieldEnum | GpsUpdateScalarFieldEnum[]
  }

  /**
   * GpsUpdate findFirstOrThrow
   */
  export type GpsUpdateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GpsUpdate
     */
    select?: GpsUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GpsUpdate
     */
    omit?: GpsUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GpsUpdateInclude<ExtArgs> | null
    /**
     * Filter, which GpsUpdate to fetch.
     */
    where?: GpsUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GpsUpdates to fetch.
     */
    orderBy?: GpsUpdateOrderByWithRelationInput | GpsUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GpsUpdates.
     */
    cursor?: GpsUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GpsUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GpsUpdates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GpsUpdates.
     */
    distinct?: GpsUpdateScalarFieldEnum | GpsUpdateScalarFieldEnum[]
  }

  /**
   * GpsUpdate findMany
   */
  export type GpsUpdateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GpsUpdate
     */
    select?: GpsUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GpsUpdate
     */
    omit?: GpsUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GpsUpdateInclude<ExtArgs> | null
    /**
     * Filter, which GpsUpdates to fetch.
     */
    where?: GpsUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GpsUpdates to fetch.
     */
    orderBy?: GpsUpdateOrderByWithRelationInput | GpsUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GpsUpdates.
     */
    cursor?: GpsUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GpsUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GpsUpdates.
     */
    skip?: number
    distinct?: GpsUpdateScalarFieldEnum | GpsUpdateScalarFieldEnum[]
  }

  /**
   * GpsUpdate create
   */
  export type GpsUpdateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GpsUpdate
     */
    select?: GpsUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GpsUpdate
     */
    omit?: GpsUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GpsUpdateInclude<ExtArgs> | null
    /**
     * The data needed to create a GpsUpdate.
     */
    data: XOR<GpsUpdateCreateInput, GpsUpdateUncheckedCreateInput>
  }

  /**
   * GpsUpdate createMany
   */
  export type GpsUpdateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GpsUpdates.
     */
    data: GpsUpdateCreateManyInput | GpsUpdateCreateManyInput[]
  }

  /**
   * GpsUpdate update
   */
  export type GpsUpdateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GpsUpdate
     */
    select?: GpsUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GpsUpdate
     */
    omit?: GpsUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GpsUpdateInclude<ExtArgs> | null
    /**
     * The data needed to update a GpsUpdate.
     */
    data: XOR<GpsUpdateUpdateInput, GpsUpdateUncheckedUpdateInput>
    /**
     * Choose, which GpsUpdate to update.
     */
    where: GpsUpdateWhereUniqueInput
  }

  /**
   * GpsUpdate updateMany
   */
  export type GpsUpdateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GpsUpdates.
     */
    data: XOR<GpsUpdateUpdateManyMutationInput, GpsUpdateUncheckedUpdateManyInput>
    /**
     * Filter which GpsUpdates to update
     */
    where?: GpsUpdateWhereInput
    /**
     * Limit how many GpsUpdates to update.
     */
    limit?: number
  }

  /**
   * GpsUpdate upsert
   */
  export type GpsUpdateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GpsUpdate
     */
    select?: GpsUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GpsUpdate
     */
    omit?: GpsUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GpsUpdateInclude<ExtArgs> | null
    /**
     * The filter to search for the GpsUpdate to update in case it exists.
     */
    where: GpsUpdateWhereUniqueInput
    /**
     * In case the GpsUpdate found by the `where` argument doesn't exist, create a new GpsUpdate with this data.
     */
    create: XOR<GpsUpdateCreateInput, GpsUpdateUncheckedCreateInput>
    /**
     * In case the GpsUpdate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GpsUpdateUpdateInput, GpsUpdateUncheckedUpdateInput>
  }

  /**
   * GpsUpdate delete
   */
  export type GpsUpdateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GpsUpdate
     */
    select?: GpsUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GpsUpdate
     */
    omit?: GpsUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GpsUpdateInclude<ExtArgs> | null
    /**
     * Filter which GpsUpdate to delete.
     */
    where: GpsUpdateWhereUniqueInput
  }

  /**
   * GpsUpdate deleteMany
   */
  export type GpsUpdateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GpsUpdates to delete
     */
    where?: GpsUpdateWhereInput
    /**
     * Limit how many GpsUpdates to delete.
     */
    limit?: number
  }

  /**
   * GpsUpdate findRaw
   */
  export type GpsUpdateFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * GpsUpdate aggregateRaw
   */
  export type GpsUpdateAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * GpsUpdate without action
   */
  export type GpsUpdateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GpsUpdate
     */
    select?: GpsUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GpsUpdate
     */
    omit?: GpsUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GpsUpdateInclude<ExtArgs> | null
  }


  /**
   * Model Goods
   */

  export type AggregateGoods = {
    _count: GoodsCountAggregateOutputType | null
    _avg: GoodsAvgAggregateOutputType | null
    _sum: GoodsSumAggregateOutputType | null
    _min: GoodsMinAggregateOutputType | null
    _max: GoodsMaxAggregateOutputType | null
  }

  export type GoodsAvgAggregateOutputType = {
    quantity: number | null
    weight: number | null
    value: number | null
  }

  export type GoodsSumAggregateOutputType = {
    quantity: number | null
    weight: number | null
    value: number | null
  }

  export type GoodsMinAggregateOutputType = {
    id: string | null
    description: string | null
    quantity: number | null
    weight: number | null
    value: number | null
    containerId: string | null
    shipmentId: string | null
    createdAt: Date | null
  }

  export type GoodsMaxAggregateOutputType = {
    id: string | null
    description: string | null
    quantity: number | null
    weight: number | null
    value: number | null
    containerId: string | null
    shipmentId: string | null
    createdAt: Date | null
  }

  export type GoodsCountAggregateOutputType = {
    id: number
    description: number
    quantity: number
    weight: number
    value: number
    containerId: number
    shipmentId: number
    createdAt: number
    _all: number
  }


  export type GoodsAvgAggregateInputType = {
    quantity?: true
    weight?: true
    value?: true
  }

  export type GoodsSumAggregateInputType = {
    quantity?: true
    weight?: true
    value?: true
  }

  export type GoodsMinAggregateInputType = {
    id?: true
    description?: true
    quantity?: true
    weight?: true
    value?: true
    containerId?: true
    shipmentId?: true
    createdAt?: true
  }

  export type GoodsMaxAggregateInputType = {
    id?: true
    description?: true
    quantity?: true
    weight?: true
    value?: true
    containerId?: true
    shipmentId?: true
    createdAt?: true
  }

  export type GoodsCountAggregateInputType = {
    id?: true
    description?: true
    quantity?: true
    weight?: true
    value?: true
    containerId?: true
    shipmentId?: true
    createdAt?: true
    _all?: true
  }

  export type GoodsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Goods to aggregate.
     */
    where?: GoodsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goods to fetch.
     */
    orderBy?: GoodsOrderByWithRelationInput | GoodsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GoodsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Goods
    **/
    _count?: true | GoodsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GoodsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GoodsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GoodsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GoodsMaxAggregateInputType
  }

  export type GetGoodsAggregateType<T extends GoodsAggregateArgs> = {
        [P in keyof T & keyof AggregateGoods]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGoods[P]>
      : GetScalarType<T[P], AggregateGoods[P]>
  }




  export type GoodsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GoodsWhereInput
    orderBy?: GoodsOrderByWithAggregationInput | GoodsOrderByWithAggregationInput[]
    by: GoodsScalarFieldEnum[] | GoodsScalarFieldEnum
    having?: GoodsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GoodsCountAggregateInputType | true
    _avg?: GoodsAvgAggregateInputType
    _sum?: GoodsSumAggregateInputType
    _min?: GoodsMinAggregateInputType
    _max?: GoodsMaxAggregateInputType
  }

  export type GoodsGroupByOutputType = {
    id: string
    description: string
    quantity: number
    weight: number
    value: number
    containerId: string
    shipmentId: string
    createdAt: Date
    _count: GoodsCountAggregateOutputType | null
    _avg: GoodsAvgAggregateOutputType | null
    _sum: GoodsSumAggregateOutputType | null
    _min: GoodsMinAggregateOutputType | null
    _max: GoodsMaxAggregateOutputType | null
  }

  type GetGoodsGroupByPayload<T extends GoodsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GoodsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GoodsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GoodsGroupByOutputType[P]>
            : GetScalarType<T[P], GoodsGroupByOutputType[P]>
        }
      >
    >


  export type GoodsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    quantity?: boolean
    weight?: boolean
    value?: boolean
    containerId?: boolean
    shipmentId?: boolean
    createdAt?: boolean
    container?: boolean | ContainerDefaultArgs<ExtArgs>
    shipment?: boolean | ShipmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["goods"]>



  export type GoodsSelectScalar = {
    id?: boolean
    description?: boolean
    quantity?: boolean
    weight?: boolean
    value?: boolean
    containerId?: boolean
    shipmentId?: boolean
    createdAt?: boolean
  }

  export type GoodsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "description" | "quantity" | "weight" | "value" | "containerId" | "shipmentId" | "createdAt", ExtArgs["result"]["goods"]>
  export type GoodsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    container?: boolean | ContainerDefaultArgs<ExtArgs>
    shipment?: boolean | ShipmentDefaultArgs<ExtArgs>
  }

  export type $GoodsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Goods"
    objects: {
      container: Prisma.$ContainerPayload<ExtArgs>
      shipment: Prisma.$ShipmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      description: string
      quantity: number
      weight: number
      value: number
      containerId: string
      shipmentId: string
      createdAt: Date
    }, ExtArgs["result"]["goods"]>
    composites: {}
  }

  type GoodsGetPayload<S extends boolean | null | undefined | GoodsDefaultArgs> = $Result.GetResult<Prisma.$GoodsPayload, S>

  type GoodsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GoodsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GoodsCountAggregateInputType | true
    }

  export interface GoodsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Goods'], meta: { name: 'Goods' } }
    /**
     * Find zero or one Goods that matches the filter.
     * @param {GoodsFindUniqueArgs} args - Arguments to find a Goods
     * @example
     * // Get one Goods
     * const goods = await prisma.goods.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GoodsFindUniqueArgs>(args: SelectSubset<T, GoodsFindUniqueArgs<ExtArgs>>): Prisma__GoodsClient<$Result.GetResult<Prisma.$GoodsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Goods that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GoodsFindUniqueOrThrowArgs} args - Arguments to find a Goods
     * @example
     * // Get one Goods
     * const goods = await prisma.goods.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GoodsFindUniqueOrThrowArgs>(args: SelectSubset<T, GoodsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GoodsClient<$Result.GetResult<Prisma.$GoodsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Goods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoodsFindFirstArgs} args - Arguments to find a Goods
     * @example
     * // Get one Goods
     * const goods = await prisma.goods.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GoodsFindFirstArgs>(args?: SelectSubset<T, GoodsFindFirstArgs<ExtArgs>>): Prisma__GoodsClient<$Result.GetResult<Prisma.$GoodsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Goods that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoodsFindFirstOrThrowArgs} args - Arguments to find a Goods
     * @example
     * // Get one Goods
     * const goods = await prisma.goods.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GoodsFindFirstOrThrowArgs>(args?: SelectSubset<T, GoodsFindFirstOrThrowArgs<ExtArgs>>): Prisma__GoodsClient<$Result.GetResult<Prisma.$GoodsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Goods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoodsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Goods
     * const goods = await prisma.goods.findMany()
     * 
     * // Get first 10 Goods
     * const goods = await prisma.goods.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const goodsWithIdOnly = await prisma.goods.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GoodsFindManyArgs>(args?: SelectSubset<T, GoodsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoodsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Goods.
     * @param {GoodsCreateArgs} args - Arguments to create a Goods.
     * @example
     * // Create one Goods
     * const Goods = await prisma.goods.create({
     *   data: {
     *     // ... data to create a Goods
     *   }
     * })
     * 
     */
    create<T extends GoodsCreateArgs>(args: SelectSubset<T, GoodsCreateArgs<ExtArgs>>): Prisma__GoodsClient<$Result.GetResult<Prisma.$GoodsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Goods.
     * @param {GoodsCreateManyArgs} args - Arguments to create many Goods.
     * @example
     * // Create many Goods
     * const goods = await prisma.goods.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GoodsCreateManyArgs>(args?: SelectSubset<T, GoodsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Goods.
     * @param {GoodsDeleteArgs} args - Arguments to delete one Goods.
     * @example
     * // Delete one Goods
     * const Goods = await prisma.goods.delete({
     *   where: {
     *     // ... filter to delete one Goods
     *   }
     * })
     * 
     */
    delete<T extends GoodsDeleteArgs>(args: SelectSubset<T, GoodsDeleteArgs<ExtArgs>>): Prisma__GoodsClient<$Result.GetResult<Prisma.$GoodsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Goods.
     * @param {GoodsUpdateArgs} args - Arguments to update one Goods.
     * @example
     * // Update one Goods
     * const goods = await prisma.goods.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GoodsUpdateArgs>(args: SelectSubset<T, GoodsUpdateArgs<ExtArgs>>): Prisma__GoodsClient<$Result.GetResult<Prisma.$GoodsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Goods.
     * @param {GoodsDeleteManyArgs} args - Arguments to filter Goods to delete.
     * @example
     * // Delete a few Goods
     * const { count } = await prisma.goods.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GoodsDeleteManyArgs>(args?: SelectSubset<T, GoodsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Goods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoodsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Goods
     * const goods = await prisma.goods.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GoodsUpdateManyArgs>(args: SelectSubset<T, GoodsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Goods.
     * @param {GoodsUpsertArgs} args - Arguments to update or create a Goods.
     * @example
     * // Update or create a Goods
     * const goods = await prisma.goods.upsert({
     *   create: {
     *     // ... data to create a Goods
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Goods we want to update
     *   }
     * })
     */
    upsert<T extends GoodsUpsertArgs>(args: SelectSubset<T, GoodsUpsertArgs<ExtArgs>>): Prisma__GoodsClient<$Result.GetResult<Prisma.$GoodsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Goods that matches the filter.
     * @param {GoodsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const goods = await prisma.goods.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: GoodsFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Goods.
     * @param {GoodsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const goods = await prisma.goods.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: GoodsAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Goods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoodsCountArgs} args - Arguments to filter Goods to count.
     * @example
     * // Count the number of Goods
     * const count = await prisma.goods.count({
     *   where: {
     *     // ... the filter for the Goods we want to count
     *   }
     * })
    **/
    count<T extends GoodsCountArgs>(
      args?: Subset<T, GoodsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GoodsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Goods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoodsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GoodsAggregateArgs>(args: Subset<T, GoodsAggregateArgs>): Prisma.PrismaPromise<GetGoodsAggregateType<T>>

    /**
     * Group by Goods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoodsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GoodsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GoodsGroupByArgs['orderBy'] }
        : { orderBy?: GoodsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GoodsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGoodsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Goods model
   */
  readonly fields: GoodsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Goods.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GoodsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    container<T extends ContainerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContainerDefaultArgs<ExtArgs>>): Prisma__ContainerClient<$Result.GetResult<Prisma.$ContainerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    shipment<T extends ShipmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShipmentDefaultArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Goods model
   */
  interface GoodsFieldRefs {
    readonly id: FieldRef<"Goods", 'String'>
    readonly description: FieldRef<"Goods", 'String'>
    readonly quantity: FieldRef<"Goods", 'Int'>
    readonly weight: FieldRef<"Goods", 'Float'>
    readonly value: FieldRef<"Goods", 'Float'>
    readonly containerId: FieldRef<"Goods", 'String'>
    readonly shipmentId: FieldRef<"Goods", 'String'>
    readonly createdAt: FieldRef<"Goods", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Goods findUnique
   */
  export type GoodsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goods
     */
    select?: GoodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goods
     */
    omit?: GoodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoodsInclude<ExtArgs> | null
    /**
     * Filter, which Goods to fetch.
     */
    where: GoodsWhereUniqueInput
  }

  /**
   * Goods findUniqueOrThrow
   */
  export type GoodsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goods
     */
    select?: GoodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goods
     */
    omit?: GoodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoodsInclude<ExtArgs> | null
    /**
     * Filter, which Goods to fetch.
     */
    where: GoodsWhereUniqueInput
  }

  /**
   * Goods findFirst
   */
  export type GoodsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goods
     */
    select?: GoodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goods
     */
    omit?: GoodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoodsInclude<ExtArgs> | null
    /**
     * Filter, which Goods to fetch.
     */
    where?: GoodsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goods to fetch.
     */
    orderBy?: GoodsOrderByWithRelationInput | GoodsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Goods.
     */
    cursor?: GoodsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Goods.
     */
    distinct?: GoodsScalarFieldEnum | GoodsScalarFieldEnum[]
  }

  /**
   * Goods findFirstOrThrow
   */
  export type GoodsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goods
     */
    select?: GoodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goods
     */
    omit?: GoodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoodsInclude<ExtArgs> | null
    /**
     * Filter, which Goods to fetch.
     */
    where?: GoodsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goods to fetch.
     */
    orderBy?: GoodsOrderByWithRelationInput | GoodsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Goods.
     */
    cursor?: GoodsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Goods.
     */
    distinct?: GoodsScalarFieldEnum | GoodsScalarFieldEnum[]
  }

  /**
   * Goods findMany
   */
  export type GoodsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goods
     */
    select?: GoodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goods
     */
    omit?: GoodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoodsInclude<ExtArgs> | null
    /**
     * Filter, which Goods to fetch.
     */
    where?: GoodsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goods to fetch.
     */
    orderBy?: GoodsOrderByWithRelationInput | GoodsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Goods.
     */
    cursor?: GoodsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goods.
     */
    skip?: number
    distinct?: GoodsScalarFieldEnum | GoodsScalarFieldEnum[]
  }

  /**
   * Goods create
   */
  export type GoodsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goods
     */
    select?: GoodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goods
     */
    omit?: GoodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoodsInclude<ExtArgs> | null
    /**
     * The data needed to create a Goods.
     */
    data: XOR<GoodsCreateInput, GoodsUncheckedCreateInput>
  }

  /**
   * Goods createMany
   */
  export type GoodsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Goods.
     */
    data: GoodsCreateManyInput | GoodsCreateManyInput[]
  }

  /**
   * Goods update
   */
  export type GoodsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goods
     */
    select?: GoodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goods
     */
    omit?: GoodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoodsInclude<ExtArgs> | null
    /**
     * The data needed to update a Goods.
     */
    data: XOR<GoodsUpdateInput, GoodsUncheckedUpdateInput>
    /**
     * Choose, which Goods to update.
     */
    where: GoodsWhereUniqueInput
  }

  /**
   * Goods updateMany
   */
  export type GoodsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Goods.
     */
    data: XOR<GoodsUpdateManyMutationInput, GoodsUncheckedUpdateManyInput>
    /**
     * Filter which Goods to update
     */
    where?: GoodsWhereInput
    /**
     * Limit how many Goods to update.
     */
    limit?: number
  }

  /**
   * Goods upsert
   */
  export type GoodsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goods
     */
    select?: GoodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goods
     */
    omit?: GoodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoodsInclude<ExtArgs> | null
    /**
     * The filter to search for the Goods to update in case it exists.
     */
    where: GoodsWhereUniqueInput
    /**
     * In case the Goods found by the `where` argument doesn't exist, create a new Goods with this data.
     */
    create: XOR<GoodsCreateInput, GoodsUncheckedCreateInput>
    /**
     * In case the Goods was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GoodsUpdateInput, GoodsUncheckedUpdateInput>
  }

  /**
   * Goods delete
   */
  export type GoodsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goods
     */
    select?: GoodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goods
     */
    omit?: GoodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoodsInclude<ExtArgs> | null
    /**
     * Filter which Goods to delete.
     */
    where: GoodsWhereUniqueInput
  }

  /**
   * Goods deleteMany
   */
  export type GoodsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Goods to delete
     */
    where?: GoodsWhereInput
    /**
     * Limit how many Goods to delete.
     */
    limit?: number
  }

  /**
   * Goods findRaw
   */
  export type GoodsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Goods aggregateRaw
   */
  export type GoodsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Goods without action
   */
  export type GoodsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goods
     */
    select?: GoodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goods
     */
    omit?: GoodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoodsInclude<ExtArgs> | null
  }


  /**
   * Model Log
   */

  export type AggregateLog = {
    _count: LogCountAggregateOutputType | null
    _min: LogMinAggregateOutputType | null
    _max: LogMaxAggregateOutputType | null
  }

  export type LogMinAggregateOutputType = {
    id: string | null
    shipmentId: string | null
    message: string | null
    location: string | null
    status: string | null
    timestamp: Date | null
  }

  export type LogMaxAggregateOutputType = {
    id: string | null
    shipmentId: string | null
    message: string | null
    location: string | null
    status: string | null
    timestamp: Date | null
  }

  export type LogCountAggregateOutputType = {
    id: number
    shipmentId: number
    message: number
    location: number
    status: number
    timestamp: number
    _all: number
  }


  export type LogMinAggregateInputType = {
    id?: true
    shipmentId?: true
    message?: true
    location?: true
    status?: true
    timestamp?: true
  }

  export type LogMaxAggregateInputType = {
    id?: true
    shipmentId?: true
    message?: true
    location?: true
    status?: true
    timestamp?: true
  }

  export type LogCountAggregateInputType = {
    id?: true
    shipmentId?: true
    message?: true
    location?: true
    status?: true
    timestamp?: true
    _all?: true
  }

  export type LogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Log to aggregate.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Logs
    **/
    _count?: true | LogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LogMaxAggregateInputType
  }

  export type GetLogAggregateType<T extends LogAggregateArgs> = {
        [P in keyof T & keyof AggregateLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLog[P]>
      : GetScalarType<T[P], AggregateLog[P]>
  }




  export type LogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogWhereInput
    orderBy?: LogOrderByWithAggregationInput | LogOrderByWithAggregationInput[]
    by: LogScalarFieldEnum[] | LogScalarFieldEnum
    having?: LogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LogCountAggregateInputType | true
    _min?: LogMinAggregateInputType
    _max?: LogMaxAggregateInputType
  }

  export type LogGroupByOutputType = {
    id: string
    shipmentId: string
    message: string
    location: string | null
    status: string | null
    timestamp: Date
    _count: LogCountAggregateOutputType | null
    _min: LogMinAggregateOutputType | null
    _max: LogMaxAggregateOutputType | null
  }

  type GetLogGroupByPayload<T extends LogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogGroupByOutputType[P]>
            : GetScalarType<T[P], LogGroupByOutputType[P]>
        }
      >
    >


  export type LogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shipmentId?: boolean
    message?: boolean
    location?: boolean
    status?: boolean
    timestamp?: boolean
    shipment?: boolean | ShipmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["log"]>



  export type LogSelectScalar = {
    id?: boolean
    shipmentId?: boolean
    message?: boolean
    location?: boolean
    status?: boolean
    timestamp?: boolean
  }

  export type LogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shipmentId" | "message" | "location" | "status" | "timestamp", ExtArgs["result"]["log"]>
  export type LogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shipment?: boolean | ShipmentDefaultArgs<ExtArgs>
  }

  export type $LogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Log"
    objects: {
      shipment: Prisma.$ShipmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shipmentId: string
      message: string
      location: string | null
      status: string | null
      timestamp: Date
    }, ExtArgs["result"]["log"]>
    composites: {}
  }

  type LogGetPayload<S extends boolean | null | undefined | LogDefaultArgs> = $Result.GetResult<Prisma.$LogPayload, S>

  type LogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LogCountAggregateInputType | true
    }

  export interface LogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Log'], meta: { name: 'Log' } }
    /**
     * Find zero or one Log that matches the filter.
     * @param {LogFindUniqueArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LogFindUniqueArgs>(args: SelectSubset<T, LogFindUniqueArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Log that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LogFindUniqueOrThrowArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LogFindUniqueOrThrowArgs>(args: SelectSubset<T, LogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Log that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogFindFirstArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LogFindFirstArgs>(args?: SelectSubset<T, LogFindFirstArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Log that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogFindFirstOrThrowArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LogFindFirstOrThrowArgs>(args?: SelectSubset<T, LogFindFirstOrThrowArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Logs
     * const logs = await prisma.log.findMany()
     * 
     * // Get first 10 Logs
     * const logs = await prisma.log.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const logWithIdOnly = await prisma.log.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LogFindManyArgs>(args?: SelectSubset<T, LogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Log.
     * @param {LogCreateArgs} args - Arguments to create a Log.
     * @example
     * // Create one Log
     * const Log = await prisma.log.create({
     *   data: {
     *     // ... data to create a Log
     *   }
     * })
     * 
     */
    create<T extends LogCreateArgs>(args: SelectSubset<T, LogCreateArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Logs.
     * @param {LogCreateManyArgs} args - Arguments to create many Logs.
     * @example
     * // Create many Logs
     * const log = await prisma.log.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LogCreateManyArgs>(args?: SelectSubset<T, LogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Log.
     * @param {LogDeleteArgs} args - Arguments to delete one Log.
     * @example
     * // Delete one Log
     * const Log = await prisma.log.delete({
     *   where: {
     *     // ... filter to delete one Log
     *   }
     * })
     * 
     */
    delete<T extends LogDeleteArgs>(args: SelectSubset<T, LogDeleteArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Log.
     * @param {LogUpdateArgs} args - Arguments to update one Log.
     * @example
     * // Update one Log
     * const log = await prisma.log.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LogUpdateArgs>(args: SelectSubset<T, LogUpdateArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Logs.
     * @param {LogDeleteManyArgs} args - Arguments to filter Logs to delete.
     * @example
     * // Delete a few Logs
     * const { count } = await prisma.log.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LogDeleteManyArgs>(args?: SelectSubset<T, LogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Logs
     * const log = await prisma.log.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LogUpdateManyArgs>(args: SelectSubset<T, LogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Log.
     * @param {LogUpsertArgs} args - Arguments to update or create a Log.
     * @example
     * // Update or create a Log
     * const log = await prisma.log.upsert({
     *   create: {
     *     // ... data to create a Log
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Log we want to update
     *   }
     * })
     */
    upsert<T extends LogUpsertArgs>(args: SelectSubset<T, LogUpsertArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Logs that matches the filter.
     * @param {LogFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const log = await prisma.log.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: LogFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Log.
     * @param {LogAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const log = await prisma.log.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: LogAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogCountArgs} args - Arguments to filter Logs to count.
     * @example
     * // Count the number of Logs
     * const count = await prisma.log.count({
     *   where: {
     *     // ... the filter for the Logs we want to count
     *   }
     * })
    **/
    count<T extends LogCountArgs>(
      args?: Subset<T, LogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LogAggregateArgs>(args: Subset<T, LogAggregateArgs>): Prisma.PrismaPromise<GetLogAggregateType<T>>

    /**
     * Group by Log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LogGroupByArgs['orderBy'] }
        : { orderBy?: LogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Log model
   */
  readonly fields: LogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Log.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shipment<T extends ShipmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShipmentDefaultArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Log model
   */
  interface LogFieldRefs {
    readonly id: FieldRef<"Log", 'String'>
    readonly shipmentId: FieldRef<"Log", 'String'>
    readonly message: FieldRef<"Log", 'String'>
    readonly location: FieldRef<"Log", 'String'>
    readonly status: FieldRef<"Log", 'String'>
    readonly timestamp: FieldRef<"Log", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Log findUnique
   */
  export type LogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where: LogWhereUniqueInput
  }

  /**
   * Log findUniqueOrThrow
   */
  export type LogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where: LogWhereUniqueInput
  }

  /**
   * Log findFirst
   */
  export type LogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Logs.
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Logs.
     */
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * Log findFirstOrThrow
   */
  export type LogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Logs.
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Logs.
     */
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * Log findMany
   */
  export type LogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter, which Logs to fetch.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Logs.
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * Log create
   */
  export type LogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * The data needed to create a Log.
     */
    data: XOR<LogCreateInput, LogUncheckedCreateInput>
  }

  /**
   * Log createMany
   */
  export type LogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Logs.
     */
    data: LogCreateManyInput | LogCreateManyInput[]
  }

  /**
   * Log update
   */
  export type LogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * The data needed to update a Log.
     */
    data: XOR<LogUpdateInput, LogUncheckedUpdateInput>
    /**
     * Choose, which Log to update.
     */
    where: LogWhereUniqueInput
  }

  /**
   * Log updateMany
   */
  export type LogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Logs.
     */
    data: XOR<LogUpdateManyMutationInput, LogUncheckedUpdateManyInput>
    /**
     * Filter which Logs to update
     */
    where?: LogWhereInput
    /**
     * Limit how many Logs to update.
     */
    limit?: number
  }

  /**
   * Log upsert
   */
  export type LogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * The filter to search for the Log to update in case it exists.
     */
    where: LogWhereUniqueInput
    /**
     * In case the Log found by the `where` argument doesn't exist, create a new Log with this data.
     */
    create: XOR<LogCreateInput, LogUncheckedCreateInput>
    /**
     * In case the Log was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LogUpdateInput, LogUncheckedUpdateInput>
  }

  /**
   * Log delete
   */
  export type LogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter which Log to delete.
     */
    where: LogWhereUniqueInput
  }

  /**
   * Log deleteMany
   */
  export type LogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Logs to delete
     */
    where?: LogWhereInput
    /**
     * Limit how many Logs to delete.
     */
    limit?: number
  }

  /**
   * Log findRaw
   */
  export type LogFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Log aggregateRaw
   */
  export type LogAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Log without action
   */
  export type LogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
  }


  /**
   * Model Document
   */

  export type AggregateDocument = {
    _count: DocumentCountAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  export type DocumentMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: string | null
    url: string | null
    shipmentId: string | null
    uploadedAt: Date | null
  }

  export type DocumentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: string | null
    url: string | null
    shipmentId: string | null
    uploadedAt: Date | null
  }

  export type DocumentCountAggregateOutputType = {
    id: number
    name: number
    type: number
    url: number
    shipmentId: number
    uploadedAt: number
    _all: number
  }


  export type DocumentMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    url?: true
    shipmentId?: true
    uploadedAt?: true
  }

  export type DocumentMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    url?: true
    shipmentId?: true
    uploadedAt?: true
  }

  export type DocumentCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    url?: true
    shipmentId?: true
    uploadedAt?: true
    _all?: true
  }

  export type DocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Document to aggregate.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Documents
    **/
    _count?: true | DocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentMaxAggregateInputType
  }

  export type GetDocumentAggregateType<T extends DocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocument[P]>
      : GetScalarType<T[P], AggregateDocument[P]>
  }




  export type DocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithAggregationInput | DocumentOrderByWithAggregationInput[]
    by: DocumentScalarFieldEnum[] | DocumentScalarFieldEnum
    having?: DocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentCountAggregateInputType | true
    _min?: DocumentMinAggregateInputType
    _max?: DocumentMaxAggregateInputType
  }

  export type DocumentGroupByOutputType = {
    id: string
    name: string
    type: string
    url: string
    shipmentId: string
    uploadedAt: Date
    _count: DocumentCountAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  type GetDocumentGroupByPayload<T extends DocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentGroupByOutputType[P]>
        }
      >
    >


  export type DocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    url?: boolean
    shipmentId?: boolean
    uploadedAt?: boolean
    shipment?: boolean | ShipmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>



  export type DocumentSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    url?: boolean
    shipmentId?: boolean
    uploadedAt?: boolean
  }

  export type DocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "url" | "shipmentId" | "uploadedAt", ExtArgs["result"]["document"]>
  export type DocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shipment?: boolean | ShipmentDefaultArgs<ExtArgs>
  }

  export type $DocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Document"
    objects: {
      shipment: Prisma.$ShipmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      type: string
      url: string
      shipmentId: string
      uploadedAt: Date
    }, ExtArgs["result"]["document"]>
    composites: {}
  }

  type DocumentGetPayload<S extends boolean | null | undefined | DocumentDefaultArgs> = $Result.GetResult<Prisma.$DocumentPayload, S>

  type DocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentCountAggregateInputType | true
    }

  export interface DocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Document'], meta: { name: 'Document' } }
    /**
     * Find zero or one Document that matches the filter.
     * @param {DocumentFindUniqueArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentFindUniqueArgs>(args: SelectSubset<T, DocumentFindUniqueArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Document that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentFindUniqueOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentFindFirstArgs>(args?: SelectSubset<T, DocumentFindFirstArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Documents
     * const documents = await prisma.document.findMany()
     * 
     * // Get first 10 Documents
     * const documents = await prisma.document.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentWithIdOnly = await prisma.document.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentFindManyArgs>(args?: SelectSubset<T, DocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Document.
     * @param {DocumentCreateArgs} args - Arguments to create a Document.
     * @example
     * // Create one Document
     * const Document = await prisma.document.create({
     *   data: {
     *     // ... data to create a Document
     *   }
     * })
     * 
     */
    create<T extends DocumentCreateArgs>(args: SelectSubset<T, DocumentCreateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Documents.
     * @param {DocumentCreateManyArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentCreateManyArgs>(args?: SelectSubset<T, DocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Document.
     * @param {DocumentDeleteArgs} args - Arguments to delete one Document.
     * @example
     * // Delete one Document
     * const Document = await prisma.document.delete({
     *   where: {
     *     // ... filter to delete one Document
     *   }
     * })
     * 
     */
    delete<T extends DocumentDeleteArgs>(args: SelectSubset<T, DocumentDeleteArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Document.
     * @param {DocumentUpdateArgs} args - Arguments to update one Document.
     * @example
     * // Update one Document
     * const document = await prisma.document.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentUpdateArgs>(args: SelectSubset<T, DocumentUpdateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Documents.
     * @param {DocumentDeleteManyArgs} args - Arguments to filter Documents to delete.
     * @example
     * // Delete a few Documents
     * const { count } = await prisma.document.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentDeleteManyArgs>(args?: SelectSubset<T, DocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentUpdateManyArgs>(args: SelectSubset<T, DocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Document.
     * @param {DocumentUpsertArgs} args - Arguments to update or create a Document.
     * @example
     * // Update or create a Document
     * const document = await prisma.document.upsert({
     *   create: {
     *     // ... data to create a Document
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Document we want to update
     *   }
     * })
     */
    upsert<T extends DocumentUpsertArgs>(args: SelectSubset<T, DocumentUpsertArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Documents that matches the filter.
     * @param {DocumentFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const document = await prisma.document.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: DocumentFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Document.
     * @param {DocumentAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const document = await prisma.document.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: DocumentAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentCountArgs} args - Arguments to filter Documents to count.
     * @example
     * // Count the number of Documents
     * const count = await prisma.document.count({
     *   where: {
     *     // ... the filter for the Documents we want to count
     *   }
     * })
    **/
    count<T extends DocumentCountArgs>(
      args?: Subset<T, DocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DocumentAggregateArgs>(args: Subset<T, DocumentAggregateArgs>): Prisma.PrismaPromise<GetDocumentAggregateType<T>>

    /**
     * Group by Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentGroupByArgs['orderBy'] }
        : { orderBy?: DocumentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Document model
   */
  readonly fields: DocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Document.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shipment<T extends ShipmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShipmentDefaultArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Document model
   */
  interface DocumentFieldRefs {
    readonly id: FieldRef<"Document", 'String'>
    readonly name: FieldRef<"Document", 'String'>
    readonly type: FieldRef<"Document", 'String'>
    readonly url: FieldRef<"Document", 'String'>
    readonly shipmentId: FieldRef<"Document", 'String'>
    readonly uploadedAt: FieldRef<"Document", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Document findUnique
   */
  export type DocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findUniqueOrThrow
   */
  export type DocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findFirst
   */
  export type DocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findFirstOrThrow
   */
  export type DocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findMany
   */
  export type DocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Documents to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document create
   */
  export type DocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a Document.
     */
    data: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
  }

  /**
   * Document createMany
   */
  export type DocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
  }

  /**
   * Document update
   */
  export type DocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a Document.
     */
    data: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
    /**
     * Choose, which Document to update.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document updateMany
   */
  export type DocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
  }

  /**
   * Document upsert
   */
  export type DocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the Document to update in case it exists.
     */
    where: DocumentWhereUniqueInput
    /**
     * In case the Document found by the `where` argument doesn't exist, create a new Document with this data.
     */
    create: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
    /**
     * In case the Document was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
  }

  /**
   * Document delete
   */
  export type DocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter which Document to delete.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document deleteMany
   */
  export type DocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Documents to delete
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to delete.
     */
    limit?: number
  }

  /**
   * Document findRaw
   */
  export type DocumentFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Document aggregateRaw
   */
  export type DocumentAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Document without action
   */
  export type DocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
  }


  /**
   * Model Port
   */

  export type AggregatePort = {
    _count: PortCountAggregateOutputType | null
    _avg: PortAvgAggregateOutputType | null
    _sum: PortSumAggregateOutputType | null
    _min: PortMinAggregateOutputType | null
    _max: PortMaxAggregateOutputType | null
  }

  export type PortAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type PortSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type PortMinAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    country: string | null
    city: string | null
    latitude: number | null
    longitude: number | null
    createdAt: Date | null
  }

  export type PortMaxAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    country: string | null
    city: string | null
    latitude: number | null
    longitude: number | null
    createdAt: Date | null
  }

  export type PortCountAggregateOutputType = {
    id: number
    code: number
    name: number
    country: number
    city: number
    latitude: number
    longitude: number
    createdAt: number
    _all: number
  }


  export type PortAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type PortSumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type PortMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    country?: true
    city?: true
    latitude?: true
    longitude?: true
    createdAt?: true
  }

  export type PortMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    country?: true
    city?: true
    latitude?: true
    longitude?: true
    createdAt?: true
  }

  export type PortCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    country?: true
    city?: true
    latitude?: true
    longitude?: true
    createdAt?: true
    _all?: true
  }

  export type PortAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Port to aggregate.
     */
    where?: PortWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ports to fetch.
     */
    orderBy?: PortOrderByWithRelationInput | PortOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PortWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ports
    **/
    _count?: true | PortCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PortAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PortSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PortMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PortMaxAggregateInputType
  }

  export type GetPortAggregateType<T extends PortAggregateArgs> = {
        [P in keyof T & keyof AggregatePort]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePort[P]>
      : GetScalarType<T[P], AggregatePort[P]>
  }




  export type PortGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PortWhereInput
    orderBy?: PortOrderByWithAggregationInput | PortOrderByWithAggregationInput[]
    by: PortScalarFieldEnum[] | PortScalarFieldEnum
    having?: PortScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PortCountAggregateInputType | true
    _avg?: PortAvgAggregateInputType
    _sum?: PortSumAggregateInputType
    _min?: PortMinAggregateInputType
    _max?: PortMaxAggregateInputType
  }

  export type PortGroupByOutputType = {
    id: string
    code: string
    name: string
    country: string
    city: string
    latitude: number
    longitude: number
    createdAt: Date
    _count: PortCountAggregateOutputType | null
    _avg: PortAvgAggregateOutputType | null
    _sum: PortSumAggregateOutputType | null
    _min: PortMinAggregateOutputType | null
    _max: PortMaxAggregateOutputType | null
  }

  type GetPortGroupByPayload<T extends PortGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PortGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PortGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PortGroupByOutputType[P]>
            : GetScalarType<T[P], PortGroupByOutputType[P]>
        }
      >
    >


  export type PortSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    country?: boolean
    city?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["port"]>



  export type PortSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    country?: boolean
    city?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
  }

  export type PortOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "name" | "country" | "city" | "latitude" | "longitude" | "createdAt", ExtArgs["result"]["port"]>

  export type $PortPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Port"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      name: string
      country: string
      city: string
      latitude: number
      longitude: number
      createdAt: Date
    }, ExtArgs["result"]["port"]>
    composites: {}
  }

  type PortGetPayload<S extends boolean | null | undefined | PortDefaultArgs> = $Result.GetResult<Prisma.$PortPayload, S>

  type PortCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PortFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PortCountAggregateInputType | true
    }

  export interface PortDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Port'], meta: { name: 'Port' } }
    /**
     * Find zero or one Port that matches the filter.
     * @param {PortFindUniqueArgs} args - Arguments to find a Port
     * @example
     * // Get one Port
     * const port = await prisma.port.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PortFindUniqueArgs>(args: SelectSubset<T, PortFindUniqueArgs<ExtArgs>>): Prisma__PortClient<$Result.GetResult<Prisma.$PortPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Port that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PortFindUniqueOrThrowArgs} args - Arguments to find a Port
     * @example
     * // Get one Port
     * const port = await prisma.port.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PortFindUniqueOrThrowArgs>(args: SelectSubset<T, PortFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PortClient<$Result.GetResult<Prisma.$PortPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Port that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortFindFirstArgs} args - Arguments to find a Port
     * @example
     * // Get one Port
     * const port = await prisma.port.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PortFindFirstArgs>(args?: SelectSubset<T, PortFindFirstArgs<ExtArgs>>): Prisma__PortClient<$Result.GetResult<Prisma.$PortPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Port that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortFindFirstOrThrowArgs} args - Arguments to find a Port
     * @example
     * // Get one Port
     * const port = await prisma.port.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PortFindFirstOrThrowArgs>(args?: SelectSubset<T, PortFindFirstOrThrowArgs<ExtArgs>>): Prisma__PortClient<$Result.GetResult<Prisma.$PortPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ports
     * const ports = await prisma.port.findMany()
     * 
     * // Get first 10 Ports
     * const ports = await prisma.port.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const portWithIdOnly = await prisma.port.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PortFindManyArgs>(args?: SelectSubset<T, PortFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Port.
     * @param {PortCreateArgs} args - Arguments to create a Port.
     * @example
     * // Create one Port
     * const Port = await prisma.port.create({
     *   data: {
     *     // ... data to create a Port
     *   }
     * })
     * 
     */
    create<T extends PortCreateArgs>(args: SelectSubset<T, PortCreateArgs<ExtArgs>>): Prisma__PortClient<$Result.GetResult<Prisma.$PortPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ports.
     * @param {PortCreateManyArgs} args - Arguments to create many Ports.
     * @example
     * // Create many Ports
     * const port = await prisma.port.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PortCreateManyArgs>(args?: SelectSubset<T, PortCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Port.
     * @param {PortDeleteArgs} args - Arguments to delete one Port.
     * @example
     * // Delete one Port
     * const Port = await prisma.port.delete({
     *   where: {
     *     // ... filter to delete one Port
     *   }
     * })
     * 
     */
    delete<T extends PortDeleteArgs>(args: SelectSubset<T, PortDeleteArgs<ExtArgs>>): Prisma__PortClient<$Result.GetResult<Prisma.$PortPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Port.
     * @param {PortUpdateArgs} args - Arguments to update one Port.
     * @example
     * // Update one Port
     * const port = await prisma.port.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PortUpdateArgs>(args: SelectSubset<T, PortUpdateArgs<ExtArgs>>): Prisma__PortClient<$Result.GetResult<Prisma.$PortPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ports.
     * @param {PortDeleteManyArgs} args - Arguments to filter Ports to delete.
     * @example
     * // Delete a few Ports
     * const { count } = await prisma.port.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PortDeleteManyArgs>(args?: SelectSubset<T, PortDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ports
     * const port = await prisma.port.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PortUpdateManyArgs>(args: SelectSubset<T, PortUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Port.
     * @param {PortUpsertArgs} args - Arguments to update or create a Port.
     * @example
     * // Update or create a Port
     * const port = await prisma.port.upsert({
     *   create: {
     *     // ... data to create a Port
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Port we want to update
     *   }
     * })
     */
    upsert<T extends PortUpsertArgs>(args: SelectSubset<T, PortUpsertArgs<ExtArgs>>): Prisma__PortClient<$Result.GetResult<Prisma.$PortPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ports that matches the filter.
     * @param {PortFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const port = await prisma.port.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: PortFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Port.
     * @param {PortAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const port = await prisma.port.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: PortAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Ports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortCountArgs} args - Arguments to filter Ports to count.
     * @example
     * // Count the number of Ports
     * const count = await prisma.port.count({
     *   where: {
     *     // ... the filter for the Ports we want to count
     *   }
     * })
    **/
    count<T extends PortCountArgs>(
      args?: Subset<T, PortCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PortCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Port.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PortAggregateArgs>(args: Subset<T, PortAggregateArgs>): Prisma.PrismaPromise<GetPortAggregateType<T>>

    /**
     * Group by Port.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PortGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PortGroupByArgs['orderBy'] }
        : { orderBy?: PortGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PortGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPortGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Port model
   */
  readonly fields: PortFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Port.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PortClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Port model
   */
  interface PortFieldRefs {
    readonly id: FieldRef<"Port", 'String'>
    readonly code: FieldRef<"Port", 'String'>
    readonly name: FieldRef<"Port", 'String'>
    readonly country: FieldRef<"Port", 'String'>
    readonly city: FieldRef<"Port", 'String'>
    readonly latitude: FieldRef<"Port", 'Float'>
    readonly longitude: FieldRef<"Port", 'Float'>
    readonly createdAt: FieldRef<"Port", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Port findUnique
   */
  export type PortFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Port
     */
    select?: PortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Port
     */
    omit?: PortOmit<ExtArgs> | null
    /**
     * Filter, which Port to fetch.
     */
    where: PortWhereUniqueInput
  }

  /**
   * Port findUniqueOrThrow
   */
  export type PortFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Port
     */
    select?: PortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Port
     */
    omit?: PortOmit<ExtArgs> | null
    /**
     * Filter, which Port to fetch.
     */
    where: PortWhereUniqueInput
  }

  /**
   * Port findFirst
   */
  export type PortFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Port
     */
    select?: PortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Port
     */
    omit?: PortOmit<ExtArgs> | null
    /**
     * Filter, which Port to fetch.
     */
    where?: PortWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ports to fetch.
     */
    orderBy?: PortOrderByWithRelationInput | PortOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ports.
     */
    cursor?: PortWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ports.
     */
    distinct?: PortScalarFieldEnum | PortScalarFieldEnum[]
  }

  /**
   * Port findFirstOrThrow
   */
  export type PortFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Port
     */
    select?: PortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Port
     */
    omit?: PortOmit<ExtArgs> | null
    /**
     * Filter, which Port to fetch.
     */
    where?: PortWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ports to fetch.
     */
    orderBy?: PortOrderByWithRelationInput | PortOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ports.
     */
    cursor?: PortWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ports.
     */
    distinct?: PortScalarFieldEnum | PortScalarFieldEnum[]
  }

  /**
   * Port findMany
   */
  export type PortFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Port
     */
    select?: PortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Port
     */
    omit?: PortOmit<ExtArgs> | null
    /**
     * Filter, which Ports to fetch.
     */
    where?: PortWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ports to fetch.
     */
    orderBy?: PortOrderByWithRelationInput | PortOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ports.
     */
    cursor?: PortWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ports.
     */
    skip?: number
    distinct?: PortScalarFieldEnum | PortScalarFieldEnum[]
  }

  /**
   * Port create
   */
  export type PortCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Port
     */
    select?: PortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Port
     */
    omit?: PortOmit<ExtArgs> | null
    /**
     * The data needed to create a Port.
     */
    data: XOR<PortCreateInput, PortUncheckedCreateInput>
  }

  /**
   * Port createMany
   */
  export type PortCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ports.
     */
    data: PortCreateManyInput | PortCreateManyInput[]
  }

  /**
   * Port update
   */
  export type PortUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Port
     */
    select?: PortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Port
     */
    omit?: PortOmit<ExtArgs> | null
    /**
     * The data needed to update a Port.
     */
    data: XOR<PortUpdateInput, PortUncheckedUpdateInput>
    /**
     * Choose, which Port to update.
     */
    where: PortWhereUniqueInput
  }

  /**
   * Port updateMany
   */
  export type PortUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ports.
     */
    data: XOR<PortUpdateManyMutationInput, PortUncheckedUpdateManyInput>
    /**
     * Filter which Ports to update
     */
    where?: PortWhereInput
    /**
     * Limit how many Ports to update.
     */
    limit?: number
  }

  /**
   * Port upsert
   */
  export type PortUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Port
     */
    select?: PortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Port
     */
    omit?: PortOmit<ExtArgs> | null
    /**
     * The filter to search for the Port to update in case it exists.
     */
    where: PortWhereUniqueInput
    /**
     * In case the Port found by the `where` argument doesn't exist, create a new Port with this data.
     */
    create: XOR<PortCreateInput, PortUncheckedCreateInput>
    /**
     * In case the Port was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PortUpdateInput, PortUncheckedUpdateInput>
  }

  /**
   * Port delete
   */
  export type PortDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Port
     */
    select?: PortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Port
     */
    omit?: PortOmit<ExtArgs> | null
    /**
     * Filter which Port to delete.
     */
    where: PortWhereUniqueInput
  }

  /**
   * Port deleteMany
   */
  export type PortDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ports to delete
     */
    where?: PortWhereInput
    /**
     * Limit how many Ports to delete.
     */
    limit?: number
  }

  /**
   * Port findRaw
   */
  export type PortFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Port aggregateRaw
   */
  export type PortAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Port without action
   */
  export type PortDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Port
     */
    select?: PortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Port
     */
    omit?: PortOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const ContainerScalarFieldEnum: {
    id: 'id',
    containerId: 'containerId',
    size: 'size',
    type: 'type',
    currentPort: 'currentPort',
    status: 'status',
    bookingDate: 'bookingDate',
    userId: 'userId',
    shipmentId: 'shipmentId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContainerScalarFieldEnum = (typeof ContainerScalarFieldEnum)[keyof typeof ContainerScalarFieldEnum]


  export const ShipmentScalarFieldEnum: {
    id: 'id',
    shipmentCode: 'shipmentCode',
    origin: 'origin',
    destination: 'destination',
    currentPort: 'currentPort',
    status: 'status',
    departureDate: 'departureDate',
    estimatedArrival: 'estimatedArrival',
    actualArrival: 'actualArrival',
    containerId: 'containerId',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    currentLatitude: 'currentLatitude',
    currentLongitude: 'currentLongitude'
  };

  export type ShipmentScalarFieldEnum = (typeof ShipmentScalarFieldEnum)[keyof typeof ShipmentScalarFieldEnum]


  export const GpsUpdateScalarFieldEnum: {
    id: 'id',
    shipmentId: 'shipmentId',
    latitude: 'latitude',
    longitude: 'longitude',
    timestamp: 'timestamp',
    speed: 'speed',
    heading: 'heading'
  };

  export type GpsUpdateScalarFieldEnum = (typeof GpsUpdateScalarFieldEnum)[keyof typeof GpsUpdateScalarFieldEnum]


  export const GoodsScalarFieldEnum: {
    id: 'id',
    description: 'description',
    quantity: 'quantity',
    weight: 'weight',
    value: 'value',
    containerId: 'containerId',
    shipmentId: 'shipmentId',
    createdAt: 'createdAt'
  };

  export type GoodsScalarFieldEnum = (typeof GoodsScalarFieldEnum)[keyof typeof GoodsScalarFieldEnum]


  export const LogScalarFieldEnum: {
    id: 'id',
    shipmentId: 'shipmentId',
    message: 'message',
    location: 'location',
    status: 'status',
    timestamp: 'timestamp'
  };

  export type LogScalarFieldEnum = (typeof LogScalarFieldEnum)[keyof typeof LogScalarFieldEnum]


  export const DocumentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    url: 'url',
    shipmentId: 'shipmentId',
    uploadedAt: 'uploadedAt'
  };

  export type DocumentScalarFieldEnum = (typeof DocumentScalarFieldEnum)[keyof typeof DocumentScalarFieldEnum]


  export const PortScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    country: 'country',
    city: 'city',
    latitude: 'latitude',
    longitude: 'longitude',
    createdAt: 'createdAt'
  };

  export type PortScalarFieldEnum = (typeof PortScalarFieldEnum)[keyof typeof PortScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'ContainerStatus'
   */
  export type EnumContainerStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContainerStatus'>
    


  /**
   * Reference to a field of type 'ContainerStatus[]'
   */
  export type ListEnumContainerStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContainerStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'ShipmentStatus'
   */
  export type EnumShipmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ShipmentStatus'>
    


  /**
   * Reference to a field of type 'ShipmentStatus[]'
   */
  export type ListEnumShipmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ShipmentStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type ContainerWhereInput = {
    AND?: ContainerWhereInput | ContainerWhereInput[]
    OR?: ContainerWhereInput[]
    NOT?: ContainerWhereInput | ContainerWhereInput[]
    id?: StringFilter<"Container"> | string
    containerId?: StringFilter<"Container"> | string
    size?: StringFilter<"Container"> | string
    type?: StringFilter<"Container"> | string
    currentPort?: StringFilter<"Container"> | string
    status?: EnumContainerStatusFilter<"Container"> | $Enums.ContainerStatus
    bookingDate?: DateTimeNullableFilter<"Container"> | Date | string | null
    userId?: StringNullableFilter<"Container"> | string | null
    shipmentId?: StringNullableFilter<"Container"> | string | null
    createdAt?: DateTimeFilter<"Container"> | Date | string
    updatedAt?: DateTimeFilter<"Container"> | Date | string
    shipment?: XOR<ShipmentNullableScalarRelationFilter, ShipmentWhereInput> | null
    goods?: GoodsListRelationFilter
  }

  export type ContainerOrderByWithRelationInput = {
    id?: SortOrder
    containerId?: SortOrder
    size?: SortOrder
    type?: SortOrder
    currentPort?: SortOrder
    status?: SortOrder
    bookingDate?: SortOrder
    userId?: SortOrder
    shipmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    shipment?: ShipmentOrderByWithRelationInput
    goods?: GoodsOrderByRelationAggregateInput
  }

  export type ContainerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    containerId?: string
    AND?: ContainerWhereInput | ContainerWhereInput[]
    OR?: ContainerWhereInput[]
    NOT?: ContainerWhereInput | ContainerWhereInput[]
    size?: StringFilter<"Container"> | string
    type?: StringFilter<"Container"> | string
    currentPort?: StringFilter<"Container"> | string
    status?: EnumContainerStatusFilter<"Container"> | $Enums.ContainerStatus
    bookingDate?: DateTimeNullableFilter<"Container"> | Date | string | null
    userId?: StringNullableFilter<"Container"> | string | null
    shipmentId?: StringNullableFilter<"Container"> | string | null
    createdAt?: DateTimeFilter<"Container"> | Date | string
    updatedAt?: DateTimeFilter<"Container"> | Date | string
    shipment?: XOR<ShipmentNullableScalarRelationFilter, ShipmentWhereInput> | null
    goods?: GoodsListRelationFilter
  }, "id" | "containerId">

  export type ContainerOrderByWithAggregationInput = {
    id?: SortOrder
    containerId?: SortOrder
    size?: SortOrder
    type?: SortOrder
    currentPort?: SortOrder
    status?: SortOrder
    bookingDate?: SortOrder
    userId?: SortOrder
    shipmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContainerCountOrderByAggregateInput
    _max?: ContainerMaxOrderByAggregateInput
    _min?: ContainerMinOrderByAggregateInput
  }

  export type ContainerScalarWhereWithAggregatesInput = {
    AND?: ContainerScalarWhereWithAggregatesInput | ContainerScalarWhereWithAggregatesInput[]
    OR?: ContainerScalarWhereWithAggregatesInput[]
    NOT?: ContainerScalarWhereWithAggregatesInput | ContainerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Container"> | string
    containerId?: StringWithAggregatesFilter<"Container"> | string
    size?: StringWithAggregatesFilter<"Container"> | string
    type?: StringWithAggregatesFilter<"Container"> | string
    currentPort?: StringWithAggregatesFilter<"Container"> | string
    status?: EnumContainerStatusWithAggregatesFilter<"Container"> | $Enums.ContainerStatus
    bookingDate?: DateTimeNullableWithAggregatesFilter<"Container"> | Date | string | null
    userId?: StringNullableWithAggregatesFilter<"Container"> | string | null
    shipmentId?: StringNullableWithAggregatesFilter<"Container"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Container"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Container"> | Date | string
  }

  export type ShipmentWhereInput = {
    AND?: ShipmentWhereInput | ShipmentWhereInput[]
    OR?: ShipmentWhereInput[]
    NOT?: ShipmentWhereInput | ShipmentWhereInput[]
    id?: StringFilter<"Shipment"> | string
    shipmentCode?: StringFilter<"Shipment"> | string
    origin?: StringFilter<"Shipment"> | string
    destination?: StringFilter<"Shipment"> | string
    currentPort?: StringFilter<"Shipment"> | string
    status?: EnumShipmentStatusFilter<"Shipment"> | $Enums.ShipmentStatus
    departureDate?: DateTimeNullableFilter<"Shipment"> | Date | string | null
    estimatedArrival?: DateTimeNullableFilter<"Shipment"> | Date | string | null
    actualArrival?: DateTimeNullableFilter<"Shipment"> | Date | string | null
    containerId?: StringFilter<"Shipment"> | string
    userId?: StringFilter<"Shipment"> | string
    createdAt?: DateTimeFilter<"Shipment"> | Date | string
    updatedAt?: DateTimeFilter<"Shipment"> | Date | string
    currentLatitude?: FloatNullableFilter<"Shipment"> | number | null
    currentLongitude?: FloatNullableFilter<"Shipment"> | number | null
    container?: XOR<ContainerScalarRelationFilter, ContainerWhereInput>
    logs?: LogListRelationFilter
    documents?: DocumentListRelationFilter
    Goods?: GoodsListRelationFilter
    gpsUpdates?: GpsUpdateListRelationFilter
  }

  export type ShipmentOrderByWithRelationInput = {
    id?: SortOrder
    shipmentCode?: SortOrder
    origin?: SortOrder
    destination?: SortOrder
    currentPort?: SortOrder
    status?: SortOrder
    departureDate?: SortOrder
    estimatedArrival?: SortOrder
    actualArrival?: SortOrder
    containerId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    currentLatitude?: SortOrder
    currentLongitude?: SortOrder
    container?: ContainerOrderByWithRelationInput
    logs?: LogOrderByRelationAggregateInput
    documents?: DocumentOrderByRelationAggregateInput
    Goods?: GoodsOrderByRelationAggregateInput
    gpsUpdates?: GpsUpdateOrderByRelationAggregateInput
  }

  export type ShipmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    shipmentCode?: string
    containerId?: string
    AND?: ShipmentWhereInput | ShipmentWhereInput[]
    OR?: ShipmentWhereInput[]
    NOT?: ShipmentWhereInput | ShipmentWhereInput[]
    origin?: StringFilter<"Shipment"> | string
    destination?: StringFilter<"Shipment"> | string
    currentPort?: StringFilter<"Shipment"> | string
    status?: EnumShipmentStatusFilter<"Shipment"> | $Enums.ShipmentStatus
    departureDate?: DateTimeNullableFilter<"Shipment"> | Date | string | null
    estimatedArrival?: DateTimeNullableFilter<"Shipment"> | Date | string | null
    actualArrival?: DateTimeNullableFilter<"Shipment"> | Date | string | null
    userId?: StringFilter<"Shipment"> | string
    createdAt?: DateTimeFilter<"Shipment"> | Date | string
    updatedAt?: DateTimeFilter<"Shipment"> | Date | string
    currentLatitude?: FloatNullableFilter<"Shipment"> | number | null
    currentLongitude?: FloatNullableFilter<"Shipment"> | number | null
    container?: XOR<ContainerScalarRelationFilter, ContainerWhereInput>
    logs?: LogListRelationFilter
    documents?: DocumentListRelationFilter
    Goods?: GoodsListRelationFilter
    gpsUpdates?: GpsUpdateListRelationFilter
  }, "id" | "shipmentCode" | "containerId">

  export type ShipmentOrderByWithAggregationInput = {
    id?: SortOrder
    shipmentCode?: SortOrder
    origin?: SortOrder
    destination?: SortOrder
    currentPort?: SortOrder
    status?: SortOrder
    departureDate?: SortOrder
    estimatedArrival?: SortOrder
    actualArrival?: SortOrder
    containerId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    currentLatitude?: SortOrder
    currentLongitude?: SortOrder
    _count?: ShipmentCountOrderByAggregateInput
    _avg?: ShipmentAvgOrderByAggregateInput
    _max?: ShipmentMaxOrderByAggregateInput
    _min?: ShipmentMinOrderByAggregateInput
    _sum?: ShipmentSumOrderByAggregateInput
  }

  export type ShipmentScalarWhereWithAggregatesInput = {
    AND?: ShipmentScalarWhereWithAggregatesInput | ShipmentScalarWhereWithAggregatesInput[]
    OR?: ShipmentScalarWhereWithAggregatesInput[]
    NOT?: ShipmentScalarWhereWithAggregatesInput | ShipmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Shipment"> | string
    shipmentCode?: StringWithAggregatesFilter<"Shipment"> | string
    origin?: StringWithAggregatesFilter<"Shipment"> | string
    destination?: StringWithAggregatesFilter<"Shipment"> | string
    currentPort?: StringWithAggregatesFilter<"Shipment"> | string
    status?: EnumShipmentStatusWithAggregatesFilter<"Shipment"> | $Enums.ShipmentStatus
    departureDate?: DateTimeNullableWithAggregatesFilter<"Shipment"> | Date | string | null
    estimatedArrival?: DateTimeNullableWithAggregatesFilter<"Shipment"> | Date | string | null
    actualArrival?: DateTimeNullableWithAggregatesFilter<"Shipment"> | Date | string | null
    containerId?: StringWithAggregatesFilter<"Shipment"> | string
    userId?: StringWithAggregatesFilter<"Shipment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Shipment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Shipment"> | Date | string
    currentLatitude?: FloatNullableWithAggregatesFilter<"Shipment"> | number | null
    currentLongitude?: FloatNullableWithAggregatesFilter<"Shipment"> | number | null
  }

  export type GpsUpdateWhereInput = {
    AND?: GpsUpdateWhereInput | GpsUpdateWhereInput[]
    OR?: GpsUpdateWhereInput[]
    NOT?: GpsUpdateWhereInput | GpsUpdateWhereInput[]
    id?: StringFilter<"GpsUpdate"> | string
    shipmentId?: StringFilter<"GpsUpdate"> | string
    latitude?: FloatFilter<"GpsUpdate"> | number
    longitude?: FloatFilter<"GpsUpdate"> | number
    timestamp?: DateTimeFilter<"GpsUpdate"> | Date | string
    speed?: FloatNullableFilter<"GpsUpdate"> | number | null
    heading?: IntNullableFilter<"GpsUpdate"> | number | null
    shipment?: XOR<ShipmentScalarRelationFilter, ShipmentWhereInput>
  }

  export type GpsUpdateOrderByWithRelationInput = {
    id?: SortOrder
    shipmentId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    timestamp?: SortOrder
    speed?: SortOrder
    heading?: SortOrder
    shipment?: ShipmentOrderByWithRelationInput
  }

  export type GpsUpdateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GpsUpdateWhereInput | GpsUpdateWhereInput[]
    OR?: GpsUpdateWhereInput[]
    NOT?: GpsUpdateWhereInput | GpsUpdateWhereInput[]
    shipmentId?: StringFilter<"GpsUpdate"> | string
    latitude?: FloatFilter<"GpsUpdate"> | number
    longitude?: FloatFilter<"GpsUpdate"> | number
    timestamp?: DateTimeFilter<"GpsUpdate"> | Date | string
    speed?: FloatNullableFilter<"GpsUpdate"> | number | null
    heading?: IntNullableFilter<"GpsUpdate"> | number | null
    shipment?: XOR<ShipmentScalarRelationFilter, ShipmentWhereInput>
  }, "id">

  export type GpsUpdateOrderByWithAggregationInput = {
    id?: SortOrder
    shipmentId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    timestamp?: SortOrder
    speed?: SortOrder
    heading?: SortOrder
    _count?: GpsUpdateCountOrderByAggregateInput
    _avg?: GpsUpdateAvgOrderByAggregateInput
    _max?: GpsUpdateMaxOrderByAggregateInput
    _min?: GpsUpdateMinOrderByAggregateInput
    _sum?: GpsUpdateSumOrderByAggregateInput
  }

  export type GpsUpdateScalarWhereWithAggregatesInput = {
    AND?: GpsUpdateScalarWhereWithAggregatesInput | GpsUpdateScalarWhereWithAggregatesInput[]
    OR?: GpsUpdateScalarWhereWithAggregatesInput[]
    NOT?: GpsUpdateScalarWhereWithAggregatesInput | GpsUpdateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GpsUpdate"> | string
    shipmentId?: StringWithAggregatesFilter<"GpsUpdate"> | string
    latitude?: FloatWithAggregatesFilter<"GpsUpdate"> | number
    longitude?: FloatWithAggregatesFilter<"GpsUpdate"> | number
    timestamp?: DateTimeWithAggregatesFilter<"GpsUpdate"> | Date | string
    speed?: FloatNullableWithAggregatesFilter<"GpsUpdate"> | number | null
    heading?: IntNullableWithAggregatesFilter<"GpsUpdate"> | number | null
  }

  export type GoodsWhereInput = {
    AND?: GoodsWhereInput | GoodsWhereInput[]
    OR?: GoodsWhereInput[]
    NOT?: GoodsWhereInput | GoodsWhereInput[]
    id?: StringFilter<"Goods"> | string
    description?: StringFilter<"Goods"> | string
    quantity?: IntFilter<"Goods"> | number
    weight?: FloatFilter<"Goods"> | number
    value?: FloatFilter<"Goods"> | number
    containerId?: StringFilter<"Goods"> | string
    shipmentId?: StringFilter<"Goods"> | string
    createdAt?: DateTimeFilter<"Goods"> | Date | string
    container?: XOR<ContainerScalarRelationFilter, ContainerWhereInput>
    shipment?: XOR<ShipmentScalarRelationFilter, ShipmentWhereInput>
  }

  export type GoodsOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    weight?: SortOrder
    value?: SortOrder
    containerId?: SortOrder
    shipmentId?: SortOrder
    createdAt?: SortOrder
    container?: ContainerOrderByWithRelationInput
    shipment?: ShipmentOrderByWithRelationInput
  }

  export type GoodsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GoodsWhereInput | GoodsWhereInput[]
    OR?: GoodsWhereInput[]
    NOT?: GoodsWhereInput | GoodsWhereInput[]
    description?: StringFilter<"Goods"> | string
    quantity?: IntFilter<"Goods"> | number
    weight?: FloatFilter<"Goods"> | number
    value?: FloatFilter<"Goods"> | number
    containerId?: StringFilter<"Goods"> | string
    shipmentId?: StringFilter<"Goods"> | string
    createdAt?: DateTimeFilter<"Goods"> | Date | string
    container?: XOR<ContainerScalarRelationFilter, ContainerWhereInput>
    shipment?: XOR<ShipmentScalarRelationFilter, ShipmentWhereInput>
  }, "id">

  export type GoodsOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    weight?: SortOrder
    value?: SortOrder
    containerId?: SortOrder
    shipmentId?: SortOrder
    createdAt?: SortOrder
    _count?: GoodsCountOrderByAggregateInput
    _avg?: GoodsAvgOrderByAggregateInput
    _max?: GoodsMaxOrderByAggregateInput
    _min?: GoodsMinOrderByAggregateInput
    _sum?: GoodsSumOrderByAggregateInput
  }

  export type GoodsScalarWhereWithAggregatesInput = {
    AND?: GoodsScalarWhereWithAggregatesInput | GoodsScalarWhereWithAggregatesInput[]
    OR?: GoodsScalarWhereWithAggregatesInput[]
    NOT?: GoodsScalarWhereWithAggregatesInput | GoodsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Goods"> | string
    description?: StringWithAggregatesFilter<"Goods"> | string
    quantity?: IntWithAggregatesFilter<"Goods"> | number
    weight?: FloatWithAggregatesFilter<"Goods"> | number
    value?: FloatWithAggregatesFilter<"Goods"> | number
    containerId?: StringWithAggregatesFilter<"Goods"> | string
    shipmentId?: StringWithAggregatesFilter<"Goods"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Goods"> | Date | string
  }

  export type LogWhereInput = {
    AND?: LogWhereInput | LogWhereInput[]
    OR?: LogWhereInput[]
    NOT?: LogWhereInput | LogWhereInput[]
    id?: StringFilter<"Log"> | string
    shipmentId?: StringFilter<"Log"> | string
    message?: StringFilter<"Log"> | string
    location?: StringNullableFilter<"Log"> | string | null
    status?: StringNullableFilter<"Log"> | string | null
    timestamp?: DateTimeFilter<"Log"> | Date | string
    shipment?: XOR<ShipmentScalarRelationFilter, ShipmentWhereInput>
  }

  export type LogOrderByWithRelationInput = {
    id?: SortOrder
    shipmentId?: SortOrder
    message?: SortOrder
    location?: SortOrder
    status?: SortOrder
    timestamp?: SortOrder
    shipment?: ShipmentOrderByWithRelationInput
  }

  export type LogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LogWhereInput | LogWhereInput[]
    OR?: LogWhereInput[]
    NOT?: LogWhereInput | LogWhereInput[]
    shipmentId?: StringFilter<"Log"> | string
    message?: StringFilter<"Log"> | string
    location?: StringNullableFilter<"Log"> | string | null
    status?: StringNullableFilter<"Log"> | string | null
    timestamp?: DateTimeFilter<"Log"> | Date | string
    shipment?: XOR<ShipmentScalarRelationFilter, ShipmentWhereInput>
  }, "id">

  export type LogOrderByWithAggregationInput = {
    id?: SortOrder
    shipmentId?: SortOrder
    message?: SortOrder
    location?: SortOrder
    status?: SortOrder
    timestamp?: SortOrder
    _count?: LogCountOrderByAggregateInput
    _max?: LogMaxOrderByAggregateInput
    _min?: LogMinOrderByAggregateInput
  }

  export type LogScalarWhereWithAggregatesInput = {
    AND?: LogScalarWhereWithAggregatesInput | LogScalarWhereWithAggregatesInput[]
    OR?: LogScalarWhereWithAggregatesInput[]
    NOT?: LogScalarWhereWithAggregatesInput | LogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Log"> | string
    shipmentId?: StringWithAggregatesFilter<"Log"> | string
    message?: StringWithAggregatesFilter<"Log"> | string
    location?: StringNullableWithAggregatesFilter<"Log"> | string | null
    status?: StringNullableWithAggregatesFilter<"Log"> | string | null
    timestamp?: DateTimeWithAggregatesFilter<"Log"> | Date | string
  }

  export type DocumentWhereInput = {
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    id?: StringFilter<"Document"> | string
    name?: StringFilter<"Document"> | string
    type?: StringFilter<"Document"> | string
    url?: StringFilter<"Document"> | string
    shipmentId?: StringFilter<"Document"> | string
    uploadedAt?: DateTimeFilter<"Document"> | Date | string
    shipment?: XOR<ShipmentScalarRelationFilter, ShipmentWhereInput>
  }

  export type DocumentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    url?: SortOrder
    shipmentId?: SortOrder
    uploadedAt?: SortOrder
    shipment?: ShipmentOrderByWithRelationInput
  }

  export type DocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    name?: StringFilter<"Document"> | string
    type?: StringFilter<"Document"> | string
    url?: StringFilter<"Document"> | string
    shipmentId?: StringFilter<"Document"> | string
    uploadedAt?: DateTimeFilter<"Document"> | Date | string
    shipment?: XOR<ShipmentScalarRelationFilter, ShipmentWhereInput>
  }, "id">

  export type DocumentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    url?: SortOrder
    shipmentId?: SortOrder
    uploadedAt?: SortOrder
    _count?: DocumentCountOrderByAggregateInput
    _max?: DocumentMaxOrderByAggregateInput
    _min?: DocumentMinOrderByAggregateInput
  }

  export type DocumentScalarWhereWithAggregatesInput = {
    AND?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    OR?: DocumentScalarWhereWithAggregatesInput[]
    NOT?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Document"> | string
    name?: StringWithAggregatesFilter<"Document"> | string
    type?: StringWithAggregatesFilter<"Document"> | string
    url?: StringWithAggregatesFilter<"Document"> | string
    shipmentId?: StringWithAggregatesFilter<"Document"> | string
    uploadedAt?: DateTimeWithAggregatesFilter<"Document"> | Date | string
  }

  export type PortWhereInput = {
    AND?: PortWhereInput | PortWhereInput[]
    OR?: PortWhereInput[]
    NOT?: PortWhereInput | PortWhereInput[]
    id?: StringFilter<"Port"> | string
    code?: StringFilter<"Port"> | string
    name?: StringFilter<"Port"> | string
    country?: StringFilter<"Port"> | string
    city?: StringFilter<"Port"> | string
    latitude?: FloatFilter<"Port"> | number
    longitude?: FloatFilter<"Port"> | number
    createdAt?: DateTimeFilter<"Port"> | Date | string
  }

  export type PortOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    country?: SortOrder
    city?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
  }

  export type PortWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: PortWhereInput | PortWhereInput[]
    OR?: PortWhereInput[]
    NOT?: PortWhereInput | PortWhereInput[]
    name?: StringFilter<"Port"> | string
    country?: StringFilter<"Port"> | string
    city?: StringFilter<"Port"> | string
    latitude?: FloatFilter<"Port"> | number
    longitude?: FloatFilter<"Port"> | number
    createdAt?: DateTimeFilter<"Port"> | Date | string
  }, "id" | "code">

  export type PortOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    country?: SortOrder
    city?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    _count?: PortCountOrderByAggregateInput
    _avg?: PortAvgOrderByAggregateInput
    _max?: PortMaxOrderByAggregateInput
    _min?: PortMinOrderByAggregateInput
    _sum?: PortSumOrderByAggregateInput
  }

  export type PortScalarWhereWithAggregatesInput = {
    AND?: PortScalarWhereWithAggregatesInput | PortScalarWhereWithAggregatesInput[]
    OR?: PortScalarWhereWithAggregatesInput[]
    NOT?: PortScalarWhereWithAggregatesInput | PortScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Port"> | string
    code?: StringWithAggregatesFilter<"Port"> | string
    name?: StringWithAggregatesFilter<"Port"> | string
    country?: StringWithAggregatesFilter<"Port"> | string
    city?: StringWithAggregatesFilter<"Port"> | string
    latitude?: FloatWithAggregatesFilter<"Port"> | number
    longitude?: FloatWithAggregatesFilter<"Port"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Port"> | Date | string
  }

  export type ContainerCreateInput = {
    id?: string
    containerId: string
    size: string
    type: string
    currentPort: string
    status?: $Enums.ContainerStatus
    bookingDate?: Date | string | null
    userId?: string | null
    shipmentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    shipment?: ShipmentCreateNestedOneWithoutContainerInput
    goods?: GoodsCreateNestedManyWithoutContainerInput
  }

  export type ContainerUncheckedCreateInput = {
    id?: string
    containerId: string
    size: string
    type: string
    currentPort: string
    status?: $Enums.ContainerStatus
    bookingDate?: Date | string | null
    userId?: string | null
    shipmentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    shipment?: ShipmentUncheckedCreateNestedOneWithoutContainerInput
    goods?: GoodsUncheckedCreateNestedManyWithoutContainerInput
  }

  export type ContainerUpdateInput = {
    containerId?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    currentPort?: StringFieldUpdateOperationsInput | string
    status?: EnumContainerStatusFieldUpdateOperationsInput | $Enums.ContainerStatus
    bookingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    shipmentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shipment?: ShipmentUpdateOneWithoutContainerNestedInput
    goods?: GoodsUpdateManyWithoutContainerNestedInput
  }

  export type ContainerUncheckedUpdateInput = {
    containerId?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    currentPort?: StringFieldUpdateOperationsInput | string
    status?: EnumContainerStatusFieldUpdateOperationsInput | $Enums.ContainerStatus
    bookingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    shipmentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shipment?: ShipmentUncheckedUpdateOneWithoutContainerNestedInput
    goods?: GoodsUncheckedUpdateManyWithoutContainerNestedInput
  }

  export type ContainerCreateManyInput = {
    id?: string
    containerId: string
    size: string
    type: string
    currentPort: string
    status?: $Enums.ContainerStatus
    bookingDate?: Date | string | null
    userId?: string | null
    shipmentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContainerUpdateManyMutationInput = {
    containerId?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    currentPort?: StringFieldUpdateOperationsInput | string
    status?: EnumContainerStatusFieldUpdateOperationsInput | $Enums.ContainerStatus
    bookingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    shipmentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContainerUncheckedUpdateManyInput = {
    containerId?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    currentPort?: StringFieldUpdateOperationsInput | string
    status?: EnumContainerStatusFieldUpdateOperationsInput | $Enums.ContainerStatus
    bookingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    shipmentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShipmentCreateInput = {
    id?: string
    shipmentCode: string
    origin: string
    destination: string
    currentPort: string
    status?: $Enums.ShipmentStatus
    departureDate?: Date | string | null
    estimatedArrival?: Date | string | null
    actualArrival?: Date | string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    currentLatitude?: number | null
    currentLongitude?: number | null
    container: ContainerCreateNestedOneWithoutShipmentInput
    logs?: LogCreateNestedManyWithoutShipmentInput
    documents?: DocumentCreateNestedManyWithoutShipmentInput
    Goods?: GoodsCreateNestedManyWithoutShipmentInput
    gpsUpdates?: GpsUpdateCreateNestedManyWithoutShipmentInput
  }

  export type ShipmentUncheckedCreateInput = {
    id?: string
    shipmentCode: string
    origin: string
    destination: string
    currentPort: string
    status?: $Enums.ShipmentStatus
    departureDate?: Date | string | null
    estimatedArrival?: Date | string | null
    actualArrival?: Date | string | null
    containerId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    currentLatitude?: number | null
    currentLongitude?: number | null
    logs?: LogUncheckedCreateNestedManyWithoutShipmentInput
    documents?: DocumentUncheckedCreateNestedManyWithoutShipmentInput
    Goods?: GoodsUncheckedCreateNestedManyWithoutShipmentInput
    gpsUpdates?: GpsUpdateUncheckedCreateNestedManyWithoutShipmentInput
  }

  export type ShipmentUpdateInput = {
    shipmentCode?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    currentPort?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    departureDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedArrival?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualArrival?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    currentLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    container?: ContainerUpdateOneRequiredWithoutShipmentNestedInput
    logs?: LogUpdateManyWithoutShipmentNestedInput
    documents?: DocumentUpdateManyWithoutShipmentNestedInput
    Goods?: GoodsUpdateManyWithoutShipmentNestedInput
    gpsUpdates?: GpsUpdateUpdateManyWithoutShipmentNestedInput
  }

  export type ShipmentUncheckedUpdateInput = {
    shipmentCode?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    currentPort?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    departureDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedArrival?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualArrival?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    containerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    currentLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    logs?: LogUncheckedUpdateManyWithoutShipmentNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutShipmentNestedInput
    Goods?: GoodsUncheckedUpdateManyWithoutShipmentNestedInput
    gpsUpdates?: GpsUpdateUncheckedUpdateManyWithoutShipmentNestedInput
  }

  export type ShipmentCreateManyInput = {
    id?: string
    shipmentCode: string
    origin: string
    destination: string
    currentPort: string
    status?: $Enums.ShipmentStatus
    departureDate?: Date | string | null
    estimatedArrival?: Date | string | null
    actualArrival?: Date | string | null
    containerId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    currentLatitude?: number | null
    currentLongitude?: number | null
  }

  export type ShipmentUpdateManyMutationInput = {
    shipmentCode?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    currentPort?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    departureDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedArrival?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualArrival?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    currentLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ShipmentUncheckedUpdateManyInput = {
    shipmentCode?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    currentPort?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    departureDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedArrival?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualArrival?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    containerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    currentLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type GpsUpdateCreateInput = {
    id?: string
    latitude: number
    longitude: number
    timestamp?: Date | string
    speed?: number | null
    heading?: number | null
    shipment: ShipmentCreateNestedOneWithoutGpsUpdatesInput
  }

  export type GpsUpdateUncheckedCreateInput = {
    id?: string
    shipmentId: string
    latitude: number
    longitude: number
    timestamp?: Date | string
    speed?: number | null
    heading?: number | null
  }

  export type GpsUpdateUpdateInput = {
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    speed?: NullableFloatFieldUpdateOperationsInput | number | null
    heading?: NullableIntFieldUpdateOperationsInput | number | null
    shipment?: ShipmentUpdateOneRequiredWithoutGpsUpdatesNestedInput
  }

  export type GpsUpdateUncheckedUpdateInput = {
    shipmentId?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    speed?: NullableFloatFieldUpdateOperationsInput | number | null
    heading?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type GpsUpdateCreateManyInput = {
    id?: string
    shipmentId: string
    latitude: number
    longitude: number
    timestamp?: Date | string
    speed?: number | null
    heading?: number | null
  }

  export type GpsUpdateUpdateManyMutationInput = {
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    speed?: NullableFloatFieldUpdateOperationsInput | number | null
    heading?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type GpsUpdateUncheckedUpdateManyInput = {
    shipmentId?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    speed?: NullableFloatFieldUpdateOperationsInput | number | null
    heading?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type GoodsCreateInput = {
    id?: string
    description: string
    quantity: number
    weight: number
    value: number
    createdAt?: Date | string
    container: ContainerCreateNestedOneWithoutGoodsInput
    shipment: ShipmentCreateNestedOneWithoutGoodsInput
  }

  export type GoodsUncheckedCreateInput = {
    id?: string
    description: string
    quantity: number
    weight: number
    value: number
    containerId: string
    shipmentId: string
    createdAt?: Date | string
  }

  export type GoodsUpdateInput = {
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    value?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    container?: ContainerUpdateOneRequiredWithoutGoodsNestedInput
    shipment?: ShipmentUpdateOneRequiredWithoutGoodsNestedInput
  }

  export type GoodsUncheckedUpdateInput = {
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    value?: FloatFieldUpdateOperationsInput | number
    containerId?: StringFieldUpdateOperationsInput | string
    shipmentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoodsCreateManyInput = {
    id?: string
    description: string
    quantity: number
    weight: number
    value: number
    containerId: string
    shipmentId: string
    createdAt?: Date | string
  }

  export type GoodsUpdateManyMutationInput = {
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    value?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoodsUncheckedUpdateManyInput = {
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    value?: FloatFieldUpdateOperationsInput | number
    containerId?: StringFieldUpdateOperationsInput | string
    shipmentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogCreateInput = {
    id?: string
    message: string
    location?: string | null
    status?: string | null
    timestamp?: Date | string
    shipment: ShipmentCreateNestedOneWithoutLogsInput
  }

  export type LogUncheckedCreateInput = {
    id?: string
    shipmentId: string
    message: string
    location?: string | null
    status?: string | null
    timestamp?: Date | string
  }

  export type LogUpdateInput = {
    message?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    shipment?: ShipmentUpdateOneRequiredWithoutLogsNestedInput
  }

  export type LogUncheckedUpdateInput = {
    shipmentId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogCreateManyInput = {
    id?: string
    shipmentId: string
    message: string
    location?: string | null
    status?: string | null
    timestamp?: Date | string
  }

  export type LogUpdateManyMutationInput = {
    message?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogUncheckedUpdateManyInput = {
    shipmentId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentCreateInput = {
    id?: string
    name: string
    type: string
    url: string
    uploadedAt?: Date | string
    shipment: ShipmentCreateNestedOneWithoutDocumentsInput
  }

  export type DocumentUncheckedCreateInput = {
    id?: string
    name: string
    type: string
    url: string
    shipmentId: string
    uploadedAt?: Date | string
  }

  export type DocumentUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shipment?: ShipmentUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type DocumentUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    shipmentId?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentCreateManyInput = {
    id?: string
    name: string
    type: string
    url: string
    shipmentId: string
    uploadedAt?: Date | string
  }

  export type DocumentUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    shipmentId?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortCreateInput = {
    id?: string
    code: string
    name: string
    country: string
    city: string
    latitude: number
    longitude: number
    createdAt?: Date | string
  }

  export type PortUncheckedCreateInput = {
    id?: string
    code: string
    name: string
    country: string
    city: string
    latitude: number
    longitude: number
    createdAt?: Date | string
  }

  export type PortUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortUncheckedUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortCreateManyInput = {
    id?: string
    code: string
    name: string
    country: string
    city: string
    latitude: number
    longitude: number
    createdAt?: Date | string
  }

  export type PortUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortUncheckedUpdateManyInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumContainerStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ContainerStatus | EnumContainerStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ContainerStatus[] | ListEnumContainerStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContainerStatus[] | ListEnumContainerStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumContainerStatusFilter<$PrismaModel> | $Enums.ContainerStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ShipmentNullableScalarRelationFilter = {
    is?: ShipmentWhereInput | null
    isNot?: ShipmentWhereInput | null
  }

  export type GoodsListRelationFilter = {
    every?: GoodsWhereInput
    some?: GoodsWhereInput
    none?: GoodsWhereInput
  }

  export type GoodsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContainerCountOrderByAggregateInput = {
    id?: SortOrder
    containerId?: SortOrder
    size?: SortOrder
    type?: SortOrder
    currentPort?: SortOrder
    status?: SortOrder
    bookingDate?: SortOrder
    userId?: SortOrder
    shipmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContainerMaxOrderByAggregateInput = {
    id?: SortOrder
    containerId?: SortOrder
    size?: SortOrder
    type?: SortOrder
    currentPort?: SortOrder
    status?: SortOrder
    bookingDate?: SortOrder
    userId?: SortOrder
    shipmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContainerMinOrderByAggregateInput = {
    id?: SortOrder
    containerId?: SortOrder
    size?: SortOrder
    type?: SortOrder
    currentPort?: SortOrder
    status?: SortOrder
    bookingDate?: SortOrder
    userId?: SortOrder
    shipmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumContainerStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContainerStatus | EnumContainerStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ContainerStatus[] | ListEnumContainerStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContainerStatus[] | ListEnumContainerStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumContainerStatusWithAggregatesFilter<$PrismaModel> | $Enums.ContainerStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContainerStatusFilter<$PrismaModel>
    _max?: NestedEnumContainerStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumShipmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ShipmentStatus | EnumShipmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ShipmentStatus[] | ListEnumShipmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShipmentStatus[] | ListEnumShipmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumShipmentStatusFilter<$PrismaModel> | $Enums.ShipmentStatus
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type ContainerScalarRelationFilter = {
    is?: ContainerWhereInput
    isNot?: ContainerWhereInput
  }

  export type LogListRelationFilter = {
    every?: LogWhereInput
    some?: LogWhereInput
    none?: LogWhereInput
  }

  export type DocumentListRelationFilter = {
    every?: DocumentWhereInput
    some?: DocumentWhereInput
    none?: DocumentWhereInput
  }

  export type GpsUpdateListRelationFilter = {
    every?: GpsUpdateWhereInput
    some?: GpsUpdateWhereInput
    none?: GpsUpdateWhereInput
  }

  export type LogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GpsUpdateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShipmentCountOrderByAggregateInput = {
    id?: SortOrder
    shipmentCode?: SortOrder
    origin?: SortOrder
    destination?: SortOrder
    currentPort?: SortOrder
    status?: SortOrder
    departureDate?: SortOrder
    estimatedArrival?: SortOrder
    actualArrival?: SortOrder
    containerId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    currentLatitude?: SortOrder
    currentLongitude?: SortOrder
  }

  export type ShipmentAvgOrderByAggregateInput = {
    currentLatitude?: SortOrder
    currentLongitude?: SortOrder
  }

  export type ShipmentMaxOrderByAggregateInput = {
    id?: SortOrder
    shipmentCode?: SortOrder
    origin?: SortOrder
    destination?: SortOrder
    currentPort?: SortOrder
    status?: SortOrder
    departureDate?: SortOrder
    estimatedArrival?: SortOrder
    actualArrival?: SortOrder
    containerId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    currentLatitude?: SortOrder
    currentLongitude?: SortOrder
  }

  export type ShipmentMinOrderByAggregateInput = {
    id?: SortOrder
    shipmentCode?: SortOrder
    origin?: SortOrder
    destination?: SortOrder
    currentPort?: SortOrder
    status?: SortOrder
    departureDate?: SortOrder
    estimatedArrival?: SortOrder
    actualArrival?: SortOrder
    containerId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    currentLatitude?: SortOrder
    currentLongitude?: SortOrder
  }

  export type ShipmentSumOrderByAggregateInput = {
    currentLatitude?: SortOrder
    currentLongitude?: SortOrder
  }

  export type EnumShipmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ShipmentStatus | EnumShipmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ShipmentStatus[] | ListEnumShipmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShipmentStatus[] | ListEnumShipmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumShipmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.ShipmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumShipmentStatusFilter<$PrismaModel>
    _max?: NestedEnumShipmentStatusFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type ShipmentScalarRelationFilter = {
    is?: ShipmentWhereInput
    isNot?: ShipmentWhereInput
  }

  export type GpsUpdateCountOrderByAggregateInput = {
    id?: SortOrder
    shipmentId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    timestamp?: SortOrder
    speed?: SortOrder
    heading?: SortOrder
  }

  export type GpsUpdateAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    speed?: SortOrder
    heading?: SortOrder
  }

  export type GpsUpdateMaxOrderByAggregateInput = {
    id?: SortOrder
    shipmentId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    timestamp?: SortOrder
    speed?: SortOrder
    heading?: SortOrder
  }

  export type GpsUpdateMinOrderByAggregateInput = {
    id?: SortOrder
    shipmentId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    timestamp?: SortOrder
    speed?: SortOrder
    heading?: SortOrder
  }

  export type GpsUpdateSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    speed?: SortOrder
    heading?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type GoodsCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    weight?: SortOrder
    value?: SortOrder
    containerId?: SortOrder
    shipmentId?: SortOrder
    createdAt?: SortOrder
  }

  export type GoodsAvgOrderByAggregateInput = {
    quantity?: SortOrder
    weight?: SortOrder
    value?: SortOrder
  }

  export type GoodsMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    weight?: SortOrder
    value?: SortOrder
    containerId?: SortOrder
    shipmentId?: SortOrder
    createdAt?: SortOrder
  }

  export type GoodsMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    weight?: SortOrder
    value?: SortOrder
    containerId?: SortOrder
    shipmentId?: SortOrder
    createdAt?: SortOrder
  }

  export type GoodsSumOrderByAggregateInput = {
    quantity?: SortOrder
    weight?: SortOrder
    value?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type LogCountOrderByAggregateInput = {
    id?: SortOrder
    shipmentId?: SortOrder
    message?: SortOrder
    location?: SortOrder
    status?: SortOrder
    timestamp?: SortOrder
  }

  export type LogMaxOrderByAggregateInput = {
    id?: SortOrder
    shipmentId?: SortOrder
    message?: SortOrder
    location?: SortOrder
    status?: SortOrder
    timestamp?: SortOrder
  }

  export type LogMinOrderByAggregateInput = {
    id?: SortOrder
    shipmentId?: SortOrder
    message?: SortOrder
    location?: SortOrder
    status?: SortOrder
    timestamp?: SortOrder
  }

  export type DocumentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    url?: SortOrder
    shipmentId?: SortOrder
    uploadedAt?: SortOrder
  }

  export type DocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    url?: SortOrder
    shipmentId?: SortOrder
    uploadedAt?: SortOrder
  }

  export type DocumentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    url?: SortOrder
    shipmentId?: SortOrder
    uploadedAt?: SortOrder
  }

  export type PortCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    country?: SortOrder
    city?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
  }

  export type PortAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type PortMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    country?: SortOrder
    city?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
  }

  export type PortMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    country?: SortOrder
    city?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
  }

  export type PortSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type ShipmentCreateNestedOneWithoutContainerInput = {
    create?: XOR<ShipmentCreateWithoutContainerInput, ShipmentUncheckedCreateWithoutContainerInput>
    connectOrCreate?: ShipmentCreateOrConnectWithoutContainerInput
    connect?: ShipmentWhereUniqueInput
  }

  export type GoodsCreateNestedManyWithoutContainerInput = {
    create?: XOR<GoodsCreateWithoutContainerInput, GoodsUncheckedCreateWithoutContainerInput> | GoodsCreateWithoutContainerInput[] | GoodsUncheckedCreateWithoutContainerInput[]
    connectOrCreate?: GoodsCreateOrConnectWithoutContainerInput | GoodsCreateOrConnectWithoutContainerInput[]
    createMany?: GoodsCreateManyContainerInputEnvelope
    connect?: GoodsWhereUniqueInput | GoodsWhereUniqueInput[]
  }

  export type ShipmentUncheckedCreateNestedOneWithoutContainerInput = {
    create?: XOR<ShipmentCreateWithoutContainerInput, ShipmentUncheckedCreateWithoutContainerInput>
    connectOrCreate?: ShipmentCreateOrConnectWithoutContainerInput
    connect?: ShipmentWhereUniqueInput
  }

  export type GoodsUncheckedCreateNestedManyWithoutContainerInput = {
    create?: XOR<GoodsCreateWithoutContainerInput, GoodsUncheckedCreateWithoutContainerInput> | GoodsCreateWithoutContainerInput[] | GoodsUncheckedCreateWithoutContainerInput[]
    connectOrCreate?: GoodsCreateOrConnectWithoutContainerInput | GoodsCreateOrConnectWithoutContainerInput[]
    createMany?: GoodsCreateManyContainerInputEnvelope
    connect?: GoodsWhereUniqueInput | GoodsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumContainerStatusFieldUpdateOperationsInput = {
    set?: $Enums.ContainerStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ShipmentUpdateOneWithoutContainerNestedInput = {
    create?: XOR<ShipmentCreateWithoutContainerInput, ShipmentUncheckedCreateWithoutContainerInput>
    connectOrCreate?: ShipmentCreateOrConnectWithoutContainerInput
    upsert?: ShipmentUpsertWithoutContainerInput
    disconnect?: ShipmentWhereInput | boolean
    delete?: ShipmentWhereInput | boolean
    connect?: ShipmentWhereUniqueInput
    update?: XOR<XOR<ShipmentUpdateToOneWithWhereWithoutContainerInput, ShipmentUpdateWithoutContainerInput>, ShipmentUncheckedUpdateWithoutContainerInput>
  }

  export type GoodsUpdateManyWithoutContainerNestedInput = {
    create?: XOR<GoodsCreateWithoutContainerInput, GoodsUncheckedCreateWithoutContainerInput> | GoodsCreateWithoutContainerInput[] | GoodsUncheckedCreateWithoutContainerInput[]
    connectOrCreate?: GoodsCreateOrConnectWithoutContainerInput | GoodsCreateOrConnectWithoutContainerInput[]
    upsert?: GoodsUpsertWithWhereUniqueWithoutContainerInput | GoodsUpsertWithWhereUniqueWithoutContainerInput[]
    createMany?: GoodsCreateManyContainerInputEnvelope
    set?: GoodsWhereUniqueInput | GoodsWhereUniqueInput[]
    disconnect?: GoodsWhereUniqueInput | GoodsWhereUniqueInput[]
    delete?: GoodsWhereUniqueInput | GoodsWhereUniqueInput[]
    connect?: GoodsWhereUniqueInput | GoodsWhereUniqueInput[]
    update?: GoodsUpdateWithWhereUniqueWithoutContainerInput | GoodsUpdateWithWhereUniqueWithoutContainerInput[]
    updateMany?: GoodsUpdateManyWithWhereWithoutContainerInput | GoodsUpdateManyWithWhereWithoutContainerInput[]
    deleteMany?: GoodsScalarWhereInput | GoodsScalarWhereInput[]
  }

  export type ShipmentUncheckedUpdateOneWithoutContainerNestedInput = {
    create?: XOR<ShipmentCreateWithoutContainerInput, ShipmentUncheckedCreateWithoutContainerInput>
    connectOrCreate?: ShipmentCreateOrConnectWithoutContainerInput
    upsert?: ShipmentUpsertWithoutContainerInput
    disconnect?: ShipmentWhereInput | boolean
    delete?: ShipmentWhereInput | boolean
    connect?: ShipmentWhereUniqueInput
    update?: XOR<XOR<ShipmentUpdateToOneWithWhereWithoutContainerInput, ShipmentUpdateWithoutContainerInput>, ShipmentUncheckedUpdateWithoutContainerInput>
  }

  export type GoodsUncheckedUpdateManyWithoutContainerNestedInput = {
    create?: XOR<GoodsCreateWithoutContainerInput, GoodsUncheckedCreateWithoutContainerInput> | GoodsCreateWithoutContainerInput[] | GoodsUncheckedCreateWithoutContainerInput[]
    connectOrCreate?: GoodsCreateOrConnectWithoutContainerInput | GoodsCreateOrConnectWithoutContainerInput[]
    upsert?: GoodsUpsertWithWhereUniqueWithoutContainerInput | GoodsUpsertWithWhereUniqueWithoutContainerInput[]
    createMany?: GoodsCreateManyContainerInputEnvelope
    set?: GoodsWhereUniqueInput | GoodsWhereUniqueInput[]
    disconnect?: GoodsWhereUniqueInput | GoodsWhereUniqueInput[]
    delete?: GoodsWhereUniqueInput | GoodsWhereUniqueInput[]
    connect?: GoodsWhereUniqueInput | GoodsWhereUniqueInput[]
    update?: GoodsUpdateWithWhereUniqueWithoutContainerInput | GoodsUpdateWithWhereUniqueWithoutContainerInput[]
    updateMany?: GoodsUpdateManyWithWhereWithoutContainerInput | GoodsUpdateManyWithWhereWithoutContainerInput[]
    deleteMany?: GoodsScalarWhereInput | GoodsScalarWhereInput[]
  }

  export type ContainerCreateNestedOneWithoutShipmentInput = {
    create?: XOR<ContainerCreateWithoutShipmentInput, ContainerUncheckedCreateWithoutShipmentInput>
    connectOrCreate?: ContainerCreateOrConnectWithoutShipmentInput
    connect?: ContainerWhereUniqueInput
  }

  export type LogCreateNestedManyWithoutShipmentInput = {
    create?: XOR<LogCreateWithoutShipmentInput, LogUncheckedCreateWithoutShipmentInput> | LogCreateWithoutShipmentInput[] | LogUncheckedCreateWithoutShipmentInput[]
    connectOrCreate?: LogCreateOrConnectWithoutShipmentInput | LogCreateOrConnectWithoutShipmentInput[]
    createMany?: LogCreateManyShipmentInputEnvelope
    connect?: LogWhereUniqueInput | LogWhereUniqueInput[]
  }

  export type DocumentCreateNestedManyWithoutShipmentInput = {
    create?: XOR<DocumentCreateWithoutShipmentInput, DocumentUncheckedCreateWithoutShipmentInput> | DocumentCreateWithoutShipmentInput[] | DocumentUncheckedCreateWithoutShipmentInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutShipmentInput | DocumentCreateOrConnectWithoutShipmentInput[]
    createMany?: DocumentCreateManyShipmentInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type GoodsCreateNestedManyWithoutShipmentInput = {
    create?: XOR<GoodsCreateWithoutShipmentInput, GoodsUncheckedCreateWithoutShipmentInput> | GoodsCreateWithoutShipmentInput[] | GoodsUncheckedCreateWithoutShipmentInput[]
    connectOrCreate?: GoodsCreateOrConnectWithoutShipmentInput | GoodsCreateOrConnectWithoutShipmentInput[]
    createMany?: GoodsCreateManyShipmentInputEnvelope
    connect?: GoodsWhereUniqueInput | GoodsWhereUniqueInput[]
  }

  export type GpsUpdateCreateNestedManyWithoutShipmentInput = {
    create?: XOR<GpsUpdateCreateWithoutShipmentInput, GpsUpdateUncheckedCreateWithoutShipmentInput> | GpsUpdateCreateWithoutShipmentInput[] | GpsUpdateUncheckedCreateWithoutShipmentInput[]
    connectOrCreate?: GpsUpdateCreateOrConnectWithoutShipmentInput | GpsUpdateCreateOrConnectWithoutShipmentInput[]
    createMany?: GpsUpdateCreateManyShipmentInputEnvelope
    connect?: GpsUpdateWhereUniqueInput | GpsUpdateWhereUniqueInput[]
  }

  export type LogUncheckedCreateNestedManyWithoutShipmentInput = {
    create?: XOR<LogCreateWithoutShipmentInput, LogUncheckedCreateWithoutShipmentInput> | LogCreateWithoutShipmentInput[] | LogUncheckedCreateWithoutShipmentInput[]
    connectOrCreate?: LogCreateOrConnectWithoutShipmentInput | LogCreateOrConnectWithoutShipmentInput[]
    createMany?: LogCreateManyShipmentInputEnvelope
    connect?: LogWhereUniqueInput | LogWhereUniqueInput[]
  }

  export type DocumentUncheckedCreateNestedManyWithoutShipmentInput = {
    create?: XOR<DocumentCreateWithoutShipmentInput, DocumentUncheckedCreateWithoutShipmentInput> | DocumentCreateWithoutShipmentInput[] | DocumentUncheckedCreateWithoutShipmentInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutShipmentInput | DocumentCreateOrConnectWithoutShipmentInput[]
    createMany?: DocumentCreateManyShipmentInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type GoodsUncheckedCreateNestedManyWithoutShipmentInput = {
    create?: XOR<GoodsCreateWithoutShipmentInput, GoodsUncheckedCreateWithoutShipmentInput> | GoodsCreateWithoutShipmentInput[] | GoodsUncheckedCreateWithoutShipmentInput[]
    connectOrCreate?: GoodsCreateOrConnectWithoutShipmentInput | GoodsCreateOrConnectWithoutShipmentInput[]
    createMany?: GoodsCreateManyShipmentInputEnvelope
    connect?: GoodsWhereUniqueInput | GoodsWhereUniqueInput[]
  }

  export type GpsUpdateUncheckedCreateNestedManyWithoutShipmentInput = {
    create?: XOR<GpsUpdateCreateWithoutShipmentInput, GpsUpdateUncheckedCreateWithoutShipmentInput> | GpsUpdateCreateWithoutShipmentInput[] | GpsUpdateUncheckedCreateWithoutShipmentInput[]
    connectOrCreate?: GpsUpdateCreateOrConnectWithoutShipmentInput | GpsUpdateCreateOrConnectWithoutShipmentInput[]
    createMany?: GpsUpdateCreateManyShipmentInputEnvelope
    connect?: GpsUpdateWhereUniqueInput | GpsUpdateWhereUniqueInput[]
  }

  export type EnumShipmentStatusFieldUpdateOperationsInput = {
    set?: $Enums.ShipmentStatus
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type ContainerUpdateOneRequiredWithoutShipmentNestedInput = {
    create?: XOR<ContainerCreateWithoutShipmentInput, ContainerUncheckedCreateWithoutShipmentInput>
    connectOrCreate?: ContainerCreateOrConnectWithoutShipmentInput
    upsert?: ContainerUpsertWithoutShipmentInput
    connect?: ContainerWhereUniqueInput
    update?: XOR<XOR<ContainerUpdateToOneWithWhereWithoutShipmentInput, ContainerUpdateWithoutShipmentInput>, ContainerUncheckedUpdateWithoutShipmentInput>
  }

  export type LogUpdateManyWithoutShipmentNestedInput = {
    create?: XOR<LogCreateWithoutShipmentInput, LogUncheckedCreateWithoutShipmentInput> | LogCreateWithoutShipmentInput[] | LogUncheckedCreateWithoutShipmentInput[]
    connectOrCreate?: LogCreateOrConnectWithoutShipmentInput | LogCreateOrConnectWithoutShipmentInput[]
    upsert?: LogUpsertWithWhereUniqueWithoutShipmentInput | LogUpsertWithWhereUniqueWithoutShipmentInput[]
    createMany?: LogCreateManyShipmentInputEnvelope
    set?: LogWhereUniqueInput | LogWhereUniqueInput[]
    disconnect?: LogWhereUniqueInput | LogWhereUniqueInput[]
    delete?: LogWhereUniqueInput | LogWhereUniqueInput[]
    connect?: LogWhereUniqueInput | LogWhereUniqueInput[]
    update?: LogUpdateWithWhereUniqueWithoutShipmentInput | LogUpdateWithWhereUniqueWithoutShipmentInput[]
    updateMany?: LogUpdateManyWithWhereWithoutShipmentInput | LogUpdateManyWithWhereWithoutShipmentInput[]
    deleteMany?: LogScalarWhereInput | LogScalarWhereInput[]
  }

  export type DocumentUpdateManyWithoutShipmentNestedInput = {
    create?: XOR<DocumentCreateWithoutShipmentInput, DocumentUncheckedCreateWithoutShipmentInput> | DocumentCreateWithoutShipmentInput[] | DocumentUncheckedCreateWithoutShipmentInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutShipmentInput | DocumentCreateOrConnectWithoutShipmentInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutShipmentInput | DocumentUpsertWithWhereUniqueWithoutShipmentInput[]
    createMany?: DocumentCreateManyShipmentInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutShipmentInput | DocumentUpdateWithWhereUniqueWithoutShipmentInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutShipmentInput | DocumentUpdateManyWithWhereWithoutShipmentInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type GoodsUpdateManyWithoutShipmentNestedInput = {
    create?: XOR<GoodsCreateWithoutShipmentInput, GoodsUncheckedCreateWithoutShipmentInput> | GoodsCreateWithoutShipmentInput[] | GoodsUncheckedCreateWithoutShipmentInput[]
    connectOrCreate?: GoodsCreateOrConnectWithoutShipmentInput | GoodsCreateOrConnectWithoutShipmentInput[]
    upsert?: GoodsUpsertWithWhereUniqueWithoutShipmentInput | GoodsUpsertWithWhereUniqueWithoutShipmentInput[]
    createMany?: GoodsCreateManyShipmentInputEnvelope
    set?: GoodsWhereUniqueInput | GoodsWhereUniqueInput[]
    disconnect?: GoodsWhereUniqueInput | GoodsWhereUniqueInput[]
    delete?: GoodsWhereUniqueInput | GoodsWhereUniqueInput[]
    connect?: GoodsWhereUniqueInput | GoodsWhereUniqueInput[]
    update?: GoodsUpdateWithWhereUniqueWithoutShipmentInput | GoodsUpdateWithWhereUniqueWithoutShipmentInput[]
    updateMany?: GoodsUpdateManyWithWhereWithoutShipmentInput | GoodsUpdateManyWithWhereWithoutShipmentInput[]
    deleteMany?: GoodsScalarWhereInput | GoodsScalarWhereInput[]
  }

  export type GpsUpdateUpdateManyWithoutShipmentNestedInput = {
    create?: XOR<GpsUpdateCreateWithoutShipmentInput, GpsUpdateUncheckedCreateWithoutShipmentInput> | GpsUpdateCreateWithoutShipmentInput[] | GpsUpdateUncheckedCreateWithoutShipmentInput[]
    connectOrCreate?: GpsUpdateCreateOrConnectWithoutShipmentInput | GpsUpdateCreateOrConnectWithoutShipmentInput[]
    upsert?: GpsUpdateUpsertWithWhereUniqueWithoutShipmentInput | GpsUpdateUpsertWithWhereUniqueWithoutShipmentInput[]
    createMany?: GpsUpdateCreateManyShipmentInputEnvelope
    set?: GpsUpdateWhereUniqueInput | GpsUpdateWhereUniqueInput[]
    disconnect?: GpsUpdateWhereUniqueInput | GpsUpdateWhereUniqueInput[]
    delete?: GpsUpdateWhereUniqueInput | GpsUpdateWhereUniqueInput[]
    connect?: GpsUpdateWhereUniqueInput | GpsUpdateWhereUniqueInput[]
    update?: GpsUpdateUpdateWithWhereUniqueWithoutShipmentInput | GpsUpdateUpdateWithWhereUniqueWithoutShipmentInput[]
    updateMany?: GpsUpdateUpdateManyWithWhereWithoutShipmentInput | GpsUpdateUpdateManyWithWhereWithoutShipmentInput[]
    deleteMany?: GpsUpdateScalarWhereInput | GpsUpdateScalarWhereInput[]
  }

  export type LogUncheckedUpdateManyWithoutShipmentNestedInput = {
    create?: XOR<LogCreateWithoutShipmentInput, LogUncheckedCreateWithoutShipmentInput> | LogCreateWithoutShipmentInput[] | LogUncheckedCreateWithoutShipmentInput[]
    connectOrCreate?: LogCreateOrConnectWithoutShipmentInput | LogCreateOrConnectWithoutShipmentInput[]
    upsert?: LogUpsertWithWhereUniqueWithoutShipmentInput | LogUpsertWithWhereUniqueWithoutShipmentInput[]
    createMany?: LogCreateManyShipmentInputEnvelope
    set?: LogWhereUniqueInput | LogWhereUniqueInput[]
    disconnect?: LogWhereUniqueInput | LogWhereUniqueInput[]
    delete?: LogWhereUniqueInput | LogWhereUniqueInput[]
    connect?: LogWhereUniqueInput | LogWhereUniqueInput[]
    update?: LogUpdateWithWhereUniqueWithoutShipmentInput | LogUpdateWithWhereUniqueWithoutShipmentInput[]
    updateMany?: LogUpdateManyWithWhereWithoutShipmentInput | LogUpdateManyWithWhereWithoutShipmentInput[]
    deleteMany?: LogScalarWhereInput | LogScalarWhereInput[]
  }

  export type DocumentUncheckedUpdateManyWithoutShipmentNestedInput = {
    create?: XOR<DocumentCreateWithoutShipmentInput, DocumentUncheckedCreateWithoutShipmentInput> | DocumentCreateWithoutShipmentInput[] | DocumentUncheckedCreateWithoutShipmentInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutShipmentInput | DocumentCreateOrConnectWithoutShipmentInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutShipmentInput | DocumentUpsertWithWhereUniqueWithoutShipmentInput[]
    createMany?: DocumentCreateManyShipmentInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutShipmentInput | DocumentUpdateWithWhereUniqueWithoutShipmentInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutShipmentInput | DocumentUpdateManyWithWhereWithoutShipmentInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type GoodsUncheckedUpdateManyWithoutShipmentNestedInput = {
    create?: XOR<GoodsCreateWithoutShipmentInput, GoodsUncheckedCreateWithoutShipmentInput> | GoodsCreateWithoutShipmentInput[] | GoodsUncheckedCreateWithoutShipmentInput[]
    connectOrCreate?: GoodsCreateOrConnectWithoutShipmentInput | GoodsCreateOrConnectWithoutShipmentInput[]
    upsert?: GoodsUpsertWithWhereUniqueWithoutShipmentInput | GoodsUpsertWithWhereUniqueWithoutShipmentInput[]
    createMany?: GoodsCreateManyShipmentInputEnvelope
    set?: GoodsWhereUniqueInput | GoodsWhereUniqueInput[]
    disconnect?: GoodsWhereUniqueInput | GoodsWhereUniqueInput[]
    delete?: GoodsWhereUniqueInput | GoodsWhereUniqueInput[]
    connect?: GoodsWhereUniqueInput | GoodsWhereUniqueInput[]
    update?: GoodsUpdateWithWhereUniqueWithoutShipmentInput | GoodsUpdateWithWhereUniqueWithoutShipmentInput[]
    updateMany?: GoodsUpdateManyWithWhereWithoutShipmentInput | GoodsUpdateManyWithWhereWithoutShipmentInput[]
    deleteMany?: GoodsScalarWhereInput | GoodsScalarWhereInput[]
  }

  export type GpsUpdateUncheckedUpdateManyWithoutShipmentNestedInput = {
    create?: XOR<GpsUpdateCreateWithoutShipmentInput, GpsUpdateUncheckedCreateWithoutShipmentInput> | GpsUpdateCreateWithoutShipmentInput[] | GpsUpdateUncheckedCreateWithoutShipmentInput[]
    connectOrCreate?: GpsUpdateCreateOrConnectWithoutShipmentInput | GpsUpdateCreateOrConnectWithoutShipmentInput[]
    upsert?: GpsUpdateUpsertWithWhereUniqueWithoutShipmentInput | GpsUpdateUpsertWithWhereUniqueWithoutShipmentInput[]
    createMany?: GpsUpdateCreateManyShipmentInputEnvelope
    set?: GpsUpdateWhereUniqueInput | GpsUpdateWhereUniqueInput[]
    disconnect?: GpsUpdateWhereUniqueInput | GpsUpdateWhereUniqueInput[]
    delete?: GpsUpdateWhereUniqueInput | GpsUpdateWhereUniqueInput[]
    connect?: GpsUpdateWhereUniqueInput | GpsUpdateWhereUniqueInput[]
    update?: GpsUpdateUpdateWithWhereUniqueWithoutShipmentInput | GpsUpdateUpdateWithWhereUniqueWithoutShipmentInput[]
    updateMany?: GpsUpdateUpdateManyWithWhereWithoutShipmentInput | GpsUpdateUpdateManyWithWhereWithoutShipmentInput[]
    deleteMany?: GpsUpdateScalarWhereInput | GpsUpdateScalarWhereInput[]
  }

  export type ShipmentCreateNestedOneWithoutGpsUpdatesInput = {
    create?: XOR<ShipmentCreateWithoutGpsUpdatesInput, ShipmentUncheckedCreateWithoutGpsUpdatesInput>
    connectOrCreate?: ShipmentCreateOrConnectWithoutGpsUpdatesInput
    connect?: ShipmentWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type ShipmentUpdateOneRequiredWithoutGpsUpdatesNestedInput = {
    create?: XOR<ShipmentCreateWithoutGpsUpdatesInput, ShipmentUncheckedCreateWithoutGpsUpdatesInput>
    connectOrCreate?: ShipmentCreateOrConnectWithoutGpsUpdatesInput
    upsert?: ShipmentUpsertWithoutGpsUpdatesInput
    connect?: ShipmentWhereUniqueInput
    update?: XOR<XOR<ShipmentUpdateToOneWithWhereWithoutGpsUpdatesInput, ShipmentUpdateWithoutGpsUpdatesInput>, ShipmentUncheckedUpdateWithoutGpsUpdatesInput>
  }

  export type ContainerCreateNestedOneWithoutGoodsInput = {
    create?: XOR<ContainerCreateWithoutGoodsInput, ContainerUncheckedCreateWithoutGoodsInput>
    connectOrCreate?: ContainerCreateOrConnectWithoutGoodsInput
    connect?: ContainerWhereUniqueInput
  }

  export type ShipmentCreateNestedOneWithoutGoodsInput = {
    create?: XOR<ShipmentCreateWithoutGoodsInput, ShipmentUncheckedCreateWithoutGoodsInput>
    connectOrCreate?: ShipmentCreateOrConnectWithoutGoodsInput
    connect?: ShipmentWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ContainerUpdateOneRequiredWithoutGoodsNestedInput = {
    create?: XOR<ContainerCreateWithoutGoodsInput, ContainerUncheckedCreateWithoutGoodsInput>
    connectOrCreate?: ContainerCreateOrConnectWithoutGoodsInput
    upsert?: ContainerUpsertWithoutGoodsInput
    connect?: ContainerWhereUniqueInput
    update?: XOR<XOR<ContainerUpdateToOneWithWhereWithoutGoodsInput, ContainerUpdateWithoutGoodsInput>, ContainerUncheckedUpdateWithoutGoodsInput>
  }

  export type ShipmentUpdateOneRequiredWithoutGoodsNestedInput = {
    create?: XOR<ShipmentCreateWithoutGoodsInput, ShipmentUncheckedCreateWithoutGoodsInput>
    connectOrCreate?: ShipmentCreateOrConnectWithoutGoodsInput
    upsert?: ShipmentUpsertWithoutGoodsInput
    connect?: ShipmentWhereUniqueInput
    update?: XOR<XOR<ShipmentUpdateToOneWithWhereWithoutGoodsInput, ShipmentUpdateWithoutGoodsInput>, ShipmentUncheckedUpdateWithoutGoodsInput>
  }

  export type ShipmentCreateNestedOneWithoutLogsInput = {
    create?: XOR<ShipmentCreateWithoutLogsInput, ShipmentUncheckedCreateWithoutLogsInput>
    connectOrCreate?: ShipmentCreateOrConnectWithoutLogsInput
    connect?: ShipmentWhereUniqueInput
  }

  export type ShipmentUpdateOneRequiredWithoutLogsNestedInput = {
    create?: XOR<ShipmentCreateWithoutLogsInput, ShipmentUncheckedCreateWithoutLogsInput>
    connectOrCreate?: ShipmentCreateOrConnectWithoutLogsInput
    upsert?: ShipmentUpsertWithoutLogsInput
    connect?: ShipmentWhereUniqueInput
    update?: XOR<XOR<ShipmentUpdateToOneWithWhereWithoutLogsInput, ShipmentUpdateWithoutLogsInput>, ShipmentUncheckedUpdateWithoutLogsInput>
  }

  export type ShipmentCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<ShipmentCreateWithoutDocumentsInput, ShipmentUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: ShipmentCreateOrConnectWithoutDocumentsInput
    connect?: ShipmentWhereUniqueInput
  }

  export type ShipmentUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<ShipmentCreateWithoutDocumentsInput, ShipmentUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: ShipmentCreateOrConnectWithoutDocumentsInput
    upsert?: ShipmentUpsertWithoutDocumentsInput
    connect?: ShipmentWhereUniqueInput
    update?: XOR<XOR<ShipmentUpdateToOneWithWhereWithoutDocumentsInput, ShipmentUpdateWithoutDocumentsInput>, ShipmentUncheckedUpdateWithoutDocumentsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumContainerStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ContainerStatus | EnumContainerStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ContainerStatus[] | ListEnumContainerStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContainerStatus[] | ListEnumContainerStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumContainerStatusFilter<$PrismaModel> | $Enums.ContainerStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumContainerStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContainerStatus | EnumContainerStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ContainerStatus[] | ListEnumContainerStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContainerStatus[] | ListEnumContainerStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumContainerStatusWithAggregatesFilter<$PrismaModel> | $Enums.ContainerStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContainerStatusFilter<$PrismaModel>
    _max?: NestedEnumContainerStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumShipmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ShipmentStatus | EnumShipmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ShipmentStatus[] | ListEnumShipmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShipmentStatus[] | ListEnumShipmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumShipmentStatusFilter<$PrismaModel> | $Enums.ShipmentStatus
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedEnumShipmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ShipmentStatus | EnumShipmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ShipmentStatus[] | ListEnumShipmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShipmentStatus[] | ListEnumShipmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumShipmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.ShipmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumShipmentStatusFilter<$PrismaModel>
    _max?: NestedEnumShipmentStatusFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type ShipmentCreateWithoutContainerInput = {
    id?: string
    shipmentCode: string
    origin: string
    destination: string
    currentPort: string
    status?: $Enums.ShipmentStatus
    departureDate?: Date | string | null
    estimatedArrival?: Date | string | null
    actualArrival?: Date | string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    currentLatitude?: number | null
    currentLongitude?: number | null
    logs?: LogCreateNestedManyWithoutShipmentInput
    documents?: DocumentCreateNestedManyWithoutShipmentInput
    Goods?: GoodsCreateNestedManyWithoutShipmentInput
    gpsUpdates?: GpsUpdateCreateNestedManyWithoutShipmentInput
  }

  export type ShipmentUncheckedCreateWithoutContainerInput = {
    id?: string
    shipmentCode: string
    origin: string
    destination: string
    currentPort: string
    status?: $Enums.ShipmentStatus
    departureDate?: Date | string | null
    estimatedArrival?: Date | string | null
    actualArrival?: Date | string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    currentLatitude?: number | null
    currentLongitude?: number | null
    logs?: LogUncheckedCreateNestedManyWithoutShipmentInput
    documents?: DocumentUncheckedCreateNestedManyWithoutShipmentInput
    Goods?: GoodsUncheckedCreateNestedManyWithoutShipmentInput
    gpsUpdates?: GpsUpdateUncheckedCreateNestedManyWithoutShipmentInput
  }

  export type ShipmentCreateOrConnectWithoutContainerInput = {
    where: ShipmentWhereUniqueInput
    create: XOR<ShipmentCreateWithoutContainerInput, ShipmentUncheckedCreateWithoutContainerInput>
  }

  export type GoodsCreateWithoutContainerInput = {
    id?: string
    description: string
    quantity: number
    weight: number
    value: number
    createdAt?: Date | string
    shipment: ShipmentCreateNestedOneWithoutGoodsInput
  }

  export type GoodsUncheckedCreateWithoutContainerInput = {
    id?: string
    description: string
    quantity: number
    weight: number
    value: number
    shipmentId: string
    createdAt?: Date | string
  }

  export type GoodsCreateOrConnectWithoutContainerInput = {
    where: GoodsWhereUniqueInput
    create: XOR<GoodsCreateWithoutContainerInput, GoodsUncheckedCreateWithoutContainerInput>
  }

  export type GoodsCreateManyContainerInputEnvelope = {
    data: GoodsCreateManyContainerInput | GoodsCreateManyContainerInput[]
  }

  export type ShipmentUpsertWithoutContainerInput = {
    update: XOR<ShipmentUpdateWithoutContainerInput, ShipmentUncheckedUpdateWithoutContainerInput>
    create: XOR<ShipmentCreateWithoutContainerInput, ShipmentUncheckedCreateWithoutContainerInput>
    where?: ShipmentWhereInput
  }

  export type ShipmentUpdateToOneWithWhereWithoutContainerInput = {
    where?: ShipmentWhereInput
    data: XOR<ShipmentUpdateWithoutContainerInput, ShipmentUncheckedUpdateWithoutContainerInput>
  }

  export type ShipmentUpdateWithoutContainerInput = {
    shipmentCode?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    currentPort?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    departureDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedArrival?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualArrival?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    currentLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    logs?: LogUpdateManyWithoutShipmentNestedInput
    documents?: DocumentUpdateManyWithoutShipmentNestedInput
    Goods?: GoodsUpdateManyWithoutShipmentNestedInput
    gpsUpdates?: GpsUpdateUpdateManyWithoutShipmentNestedInput
  }

  export type ShipmentUncheckedUpdateWithoutContainerInput = {
    shipmentCode?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    currentPort?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    departureDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedArrival?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualArrival?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    currentLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    logs?: LogUncheckedUpdateManyWithoutShipmentNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutShipmentNestedInput
    Goods?: GoodsUncheckedUpdateManyWithoutShipmentNestedInput
    gpsUpdates?: GpsUpdateUncheckedUpdateManyWithoutShipmentNestedInput
  }

  export type GoodsUpsertWithWhereUniqueWithoutContainerInput = {
    where: GoodsWhereUniqueInput
    update: XOR<GoodsUpdateWithoutContainerInput, GoodsUncheckedUpdateWithoutContainerInput>
    create: XOR<GoodsCreateWithoutContainerInput, GoodsUncheckedCreateWithoutContainerInput>
  }

  export type GoodsUpdateWithWhereUniqueWithoutContainerInput = {
    where: GoodsWhereUniqueInput
    data: XOR<GoodsUpdateWithoutContainerInput, GoodsUncheckedUpdateWithoutContainerInput>
  }

  export type GoodsUpdateManyWithWhereWithoutContainerInput = {
    where: GoodsScalarWhereInput
    data: XOR<GoodsUpdateManyMutationInput, GoodsUncheckedUpdateManyWithoutContainerInput>
  }

  export type GoodsScalarWhereInput = {
    AND?: GoodsScalarWhereInput | GoodsScalarWhereInput[]
    OR?: GoodsScalarWhereInput[]
    NOT?: GoodsScalarWhereInput | GoodsScalarWhereInput[]
    id?: StringFilter<"Goods"> | string
    description?: StringFilter<"Goods"> | string
    quantity?: IntFilter<"Goods"> | number
    weight?: FloatFilter<"Goods"> | number
    value?: FloatFilter<"Goods"> | number
    containerId?: StringFilter<"Goods"> | string
    shipmentId?: StringFilter<"Goods"> | string
    createdAt?: DateTimeFilter<"Goods"> | Date | string
  }

  export type ContainerCreateWithoutShipmentInput = {
    id?: string
    containerId: string
    size: string
    type: string
    currentPort: string
    status?: $Enums.ContainerStatus
    bookingDate?: Date | string | null
    userId?: string | null
    shipmentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    goods?: GoodsCreateNestedManyWithoutContainerInput
  }

  export type ContainerUncheckedCreateWithoutShipmentInput = {
    id?: string
    containerId: string
    size: string
    type: string
    currentPort: string
    status?: $Enums.ContainerStatus
    bookingDate?: Date | string | null
    userId?: string | null
    shipmentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    goods?: GoodsUncheckedCreateNestedManyWithoutContainerInput
  }

  export type ContainerCreateOrConnectWithoutShipmentInput = {
    where: ContainerWhereUniqueInput
    create: XOR<ContainerCreateWithoutShipmentInput, ContainerUncheckedCreateWithoutShipmentInput>
  }

  export type LogCreateWithoutShipmentInput = {
    id?: string
    message: string
    location?: string | null
    status?: string | null
    timestamp?: Date | string
  }

  export type LogUncheckedCreateWithoutShipmentInput = {
    id?: string
    message: string
    location?: string | null
    status?: string | null
    timestamp?: Date | string
  }

  export type LogCreateOrConnectWithoutShipmentInput = {
    where: LogWhereUniqueInput
    create: XOR<LogCreateWithoutShipmentInput, LogUncheckedCreateWithoutShipmentInput>
  }

  export type LogCreateManyShipmentInputEnvelope = {
    data: LogCreateManyShipmentInput | LogCreateManyShipmentInput[]
  }

  export type DocumentCreateWithoutShipmentInput = {
    id?: string
    name: string
    type: string
    url: string
    uploadedAt?: Date | string
  }

  export type DocumentUncheckedCreateWithoutShipmentInput = {
    id?: string
    name: string
    type: string
    url: string
    uploadedAt?: Date | string
  }

  export type DocumentCreateOrConnectWithoutShipmentInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutShipmentInput, DocumentUncheckedCreateWithoutShipmentInput>
  }

  export type DocumentCreateManyShipmentInputEnvelope = {
    data: DocumentCreateManyShipmentInput | DocumentCreateManyShipmentInput[]
  }

  export type GoodsCreateWithoutShipmentInput = {
    id?: string
    description: string
    quantity: number
    weight: number
    value: number
    createdAt?: Date | string
    container: ContainerCreateNestedOneWithoutGoodsInput
  }

  export type GoodsUncheckedCreateWithoutShipmentInput = {
    id?: string
    description: string
    quantity: number
    weight: number
    value: number
    containerId: string
    createdAt?: Date | string
  }

  export type GoodsCreateOrConnectWithoutShipmentInput = {
    where: GoodsWhereUniqueInput
    create: XOR<GoodsCreateWithoutShipmentInput, GoodsUncheckedCreateWithoutShipmentInput>
  }

  export type GoodsCreateManyShipmentInputEnvelope = {
    data: GoodsCreateManyShipmentInput | GoodsCreateManyShipmentInput[]
  }

  export type GpsUpdateCreateWithoutShipmentInput = {
    id?: string
    latitude: number
    longitude: number
    timestamp?: Date | string
    speed?: number | null
    heading?: number | null
  }

  export type GpsUpdateUncheckedCreateWithoutShipmentInput = {
    id?: string
    latitude: number
    longitude: number
    timestamp?: Date | string
    speed?: number | null
    heading?: number | null
  }

  export type GpsUpdateCreateOrConnectWithoutShipmentInput = {
    where: GpsUpdateWhereUniqueInput
    create: XOR<GpsUpdateCreateWithoutShipmentInput, GpsUpdateUncheckedCreateWithoutShipmentInput>
  }

  export type GpsUpdateCreateManyShipmentInputEnvelope = {
    data: GpsUpdateCreateManyShipmentInput | GpsUpdateCreateManyShipmentInput[]
  }

  export type ContainerUpsertWithoutShipmentInput = {
    update: XOR<ContainerUpdateWithoutShipmentInput, ContainerUncheckedUpdateWithoutShipmentInput>
    create: XOR<ContainerCreateWithoutShipmentInput, ContainerUncheckedCreateWithoutShipmentInput>
    where?: ContainerWhereInput
  }

  export type ContainerUpdateToOneWithWhereWithoutShipmentInput = {
    where?: ContainerWhereInput
    data: XOR<ContainerUpdateWithoutShipmentInput, ContainerUncheckedUpdateWithoutShipmentInput>
  }

  export type ContainerUpdateWithoutShipmentInput = {
    containerId?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    currentPort?: StringFieldUpdateOperationsInput | string
    status?: EnumContainerStatusFieldUpdateOperationsInput | $Enums.ContainerStatus
    bookingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    shipmentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goods?: GoodsUpdateManyWithoutContainerNestedInput
  }

  export type ContainerUncheckedUpdateWithoutShipmentInput = {
    containerId?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    currentPort?: StringFieldUpdateOperationsInput | string
    status?: EnumContainerStatusFieldUpdateOperationsInput | $Enums.ContainerStatus
    bookingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    shipmentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goods?: GoodsUncheckedUpdateManyWithoutContainerNestedInput
  }

  export type LogUpsertWithWhereUniqueWithoutShipmentInput = {
    where: LogWhereUniqueInput
    update: XOR<LogUpdateWithoutShipmentInput, LogUncheckedUpdateWithoutShipmentInput>
    create: XOR<LogCreateWithoutShipmentInput, LogUncheckedCreateWithoutShipmentInput>
  }

  export type LogUpdateWithWhereUniqueWithoutShipmentInput = {
    where: LogWhereUniqueInput
    data: XOR<LogUpdateWithoutShipmentInput, LogUncheckedUpdateWithoutShipmentInput>
  }

  export type LogUpdateManyWithWhereWithoutShipmentInput = {
    where: LogScalarWhereInput
    data: XOR<LogUpdateManyMutationInput, LogUncheckedUpdateManyWithoutShipmentInput>
  }

  export type LogScalarWhereInput = {
    AND?: LogScalarWhereInput | LogScalarWhereInput[]
    OR?: LogScalarWhereInput[]
    NOT?: LogScalarWhereInput | LogScalarWhereInput[]
    id?: StringFilter<"Log"> | string
    shipmentId?: StringFilter<"Log"> | string
    message?: StringFilter<"Log"> | string
    location?: StringNullableFilter<"Log"> | string | null
    status?: StringNullableFilter<"Log"> | string | null
    timestamp?: DateTimeFilter<"Log"> | Date | string
  }

  export type DocumentUpsertWithWhereUniqueWithoutShipmentInput = {
    where: DocumentWhereUniqueInput
    update: XOR<DocumentUpdateWithoutShipmentInput, DocumentUncheckedUpdateWithoutShipmentInput>
    create: XOR<DocumentCreateWithoutShipmentInput, DocumentUncheckedCreateWithoutShipmentInput>
  }

  export type DocumentUpdateWithWhereUniqueWithoutShipmentInput = {
    where: DocumentWhereUniqueInput
    data: XOR<DocumentUpdateWithoutShipmentInput, DocumentUncheckedUpdateWithoutShipmentInput>
  }

  export type DocumentUpdateManyWithWhereWithoutShipmentInput = {
    where: DocumentScalarWhereInput
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyWithoutShipmentInput>
  }

  export type DocumentScalarWhereInput = {
    AND?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    OR?: DocumentScalarWhereInput[]
    NOT?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    id?: StringFilter<"Document"> | string
    name?: StringFilter<"Document"> | string
    type?: StringFilter<"Document"> | string
    url?: StringFilter<"Document"> | string
    shipmentId?: StringFilter<"Document"> | string
    uploadedAt?: DateTimeFilter<"Document"> | Date | string
  }

  export type GoodsUpsertWithWhereUniqueWithoutShipmentInput = {
    where: GoodsWhereUniqueInput
    update: XOR<GoodsUpdateWithoutShipmentInput, GoodsUncheckedUpdateWithoutShipmentInput>
    create: XOR<GoodsCreateWithoutShipmentInput, GoodsUncheckedCreateWithoutShipmentInput>
  }

  export type GoodsUpdateWithWhereUniqueWithoutShipmentInput = {
    where: GoodsWhereUniqueInput
    data: XOR<GoodsUpdateWithoutShipmentInput, GoodsUncheckedUpdateWithoutShipmentInput>
  }

  export type GoodsUpdateManyWithWhereWithoutShipmentInput = {
    where: GoodsScalarWhereInput
    data: XOR<GoodsUpdateManyMutationInput, GoodsUncheckedUpdateManyWithoutShipmentInput>
  }

  export type GpsUpdateUpsertWithWhereUniqueWithoutShipmentInput = {
    where: GpsUpdateWhereUniqueInput
    update: XOR<GpsUpdateUpdateWithoutShipmentInput, GpsUpdateUncheckedUpdateWithoutShipmentInput>
    create: XOR<GpsUpdateCreateWithoutShipmentInput, GpsUpdateUncheckedCreateWithoutShipmentInput>
  }

  export type GpsUpdateUpdateWithWhereUniqueWithoutShipmentInput = {
    where: GpsUpdateWhereUniqueInput
    data: XOR<GpsUpdateUpdateWithoutShipmentInput, GpsUpdateUncheckedUpdateWithoutShipmentInput>
  }

  export type GpsUpdateUpdateManyWithWhereWithoutShipmentInput = {
    where: GpsUpdateScalarWhereInput
    data: XOR<GpsUpdateUpdateManyMutationInput, GpsUpdateUncheckedUpdateManyWithoutShipmentInput>
  }

  export type GpsUpdateScalarWhereInput = {
    AND?: GpsUpdateScalarWhereInput | GpsUpdateScalarWhereInput[]
    OR?: GpsUpdateScalarWhereInput[]
    NOT?: GpsUpdateScalarWhereInput | GpsUpdateScalarWhereInput[]
    id?: StringFilter<"GpsUpdate"> | string
    shipmentId?: StringFilter<"GpsUpdate"> | string
    latitude?: FloatFilter<"GpsUpdate"> | number
    longitude?: FloatFilter<"GpsUpdate"> | number
    timestamp?: DateTimeFilter<"GpsUpdate"> | Date | string
    speed?: FloatNullableFilter<"GpsUpdate"> | number | null
    heading?: IntNullableFilter<"GpsUpdate"> | number | null
  }

  export type ShipmentCreateWithoutGpsUpdatesInput = {
    id?: string
    shipmentCode: string
    origin: string
    destination: string
    currentPort: string
    status?: $Enums.ShipmentStatus
    departureDate?: Date | string | null
    estimatedArrival?: Date | string | null
    actualArrival?: Date | string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    currentLatitude?: number | null
    currentLongitude?: number | null
    container: ContainerCreateNestedOneWithoutShipmentInput
    logs?: LogCreateNestedManyWithoutShipmentInput
    documents?: DocumentCreateNestedManyWithoutShipmentInput
    Goods?: GoodsCreateNestedManyWithoutShipmentInput
  }

  export type ShipmentUncheckedCreateWithoutGpsUpdatesInput = {
    id?: string
    shipmentCode: string
    origin: string
    destination: string
    currentPort: string
    status?: $Enums.ShipmentStatus
    departureDate?: Date | string | null
    estimatedArrival?: Date | string | null
    actualArrival?: Date | string | null
    containerId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    currentLatitude?: number | null
    currentLongitude?: number | null
    logs?: LogUncheckedCreateNestedManyWithoutShipmentInput
    documents?: DocumentUncheckedCreateNestedManyWithoutShipmentInput
    Goods?: GoodsUncheckedCreateNestedManyWithoutShipmentInput
  }

  export type ShipmentCreateOrConnectWithoutGpsUpdatesInput = {
    where: ShipmentWhereUniqueInput
    create: XOR<ShipmentCreateWithoutGpsUpdatesInput, ShipmentUncheckedCreateWithoutGpsUpdatesInput>
  }

  export type ShipmentUpsertWithoutGpsUpdatesInput = {
    update: XOR<ShipmentUpdateWithoutGpsUpdatesInput, ShipmentUncheckedUpdateWithoutGpsUpdatesInput>
    create: XOR<ShipmentCreateWithoutGpsUpdatesInput, ShipmentUncheckedCreateWithoutGpsUpdatesInput>
    where?: ShipmentWhereInput
  }

  export type ShipmentUpdateToOneWithWhereWithoutGpsUpdatesInput = {
    where?: ShipmentWhereInput
    data: XOR<ShipmentUpdateWithoutGpsUpdatesInput, ShipmentUncheckedUpdateWithoutGpsUpdatesInput>
  }

  export type ShipmentUpdateWithoutGpsUpdatesInput = {
    shipmentCode?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    currentPort?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    departureDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedArrival?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualArrival?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    currentLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    container?: ContainerUpdateOneRequiredWithoutShipmentNestedInput
    logs?: LogUpdateManyWithoutShipmentNestedInput
    documents?: DocumentUpdateManyWithoutShipmentNestedInput
    Goods?: GoodsUpdateManyWithoutShipmentNestedInput
  }

  export type ShipmentUncheckedUpdateWithoutGpsUpdatesInput = {
    shipmentCode?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    currentPort?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    departureDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedArrival?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualArrival?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    containerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    currentLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    logs?: LogUncheckedUpdateManyWithoutShipmentNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutShipmentNestedInput
    Goods?: GoodsUncheckedUpdateManyWithoutShipmentNestedInput
  }

  export type ContainerCreateWithoutGoodsInput = {
    id?: string
    containerId: string
    size: string
    type: string
    currentPort: string
    status?: $Enums.ContainerStatus
    bookingDate?: Date | string | null
    userId?: string | null
    shipmentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    shipment?: ShipmentCreateNestedOneWithoutContainerInput
  }

  export type ContainerUncheckedCreateWithoutGoodsInput = {
    id?: string
    containerId: string
    size: string
    type: string
    currentPort: string
    status?: $Enums.ContainerStatus
    bookingDate?: Date | string | null
    userId?: string | null
    shipmentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    shipment?: ShipmentUncheckedCreateNestedOneWithoutContainerInput
  }

  export type ContainerCreateOrConnectWithoutGoodsInput = {
    where: ContainerWhereUniqueInput
    create: XOR<ContainerCreateWithoutGoodsInput, ContainerUncheckedCreateWithoutGoodsInput>
  }

  export type ShipmentCreateWithoutGoodsInput = {
    id?: string
    shipmentCode: string
    origin: string
    destination: string
    currentPort: string
    status?: $Enums.ShipmentStatus
    departureDate?: Date | string | null
    estimatedArrival?: Date | string | null
    actualArrival?: Date | string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    currentLatitude?: number | null
    currentLongitude?: number | null
    container: ContainerCreateNestedOneWithoutShipmentInput
    logs?: LogCreateNestedManyWithoutShipmentInput
    documents?: DocumentCreateNestedManyWithoutShipmentInput
    gpsUpdates?: GpsUpdateCreateNestedManyWithoutShipmentInput
  }

  export type ShipmentUncheckedCreateWithoutGoodsInput = {
    id?: string
    shipmentCode: string
    origin: string
    destination: string
    currentPort: string
    status?: $Enums.ShipmentStatus
    departureDate?: Date | string | null
    estimatedArrival?: Date | string | null
    actualArrival?: Date | string | null
    containerId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    currentLatitude?: number | null
    currentLongitude?: number | null
    logs?: LogUncheckedCreateNestedManyWithoutShipmentInput
    documents?: DocumentUncheckedCreateNestedManyWithoutShipmentInput
    gpsUpdates?: GpsUpdateUncheckedCreateNestedManyWithoutShipmentInput
  }

  export type ShipmentCreateOrConnectWithoutGoodsInput = {
    where: ShipmentWhereUniqueInput
    create: XOR<ShipmentCreateWithoutGoodsInput, ShipmentUncheckedCreateWithoutGoodsInput>
  }

  export type ContainerUpsertWithoutGoodsInput = {
    update: XOR<ContainerUpdateWithoutGoodsInput, ContainerUncheckedUpdateWithoutGoodsInput>
    create: XOR<ContainerCreateWithoutGoodsInput, ContainerUncheckedCreateWithoutGoodsInput>
    where?: ContainerWhereInput
  }

  export type ContainerUpdateToOneWithWhereWithoutGoodsInput = {
    where?: ContainerWhereInput
    data: XOR<ContainerUpdateWithoutGoodsInput, ContainerUncheckedUpdateWithoutGoodsInput>
  }

  export type ContainerUpdateWithoutGoodsInput = {
    containerId?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    currentPort?: StringFieldUpdateOperationsInput | string
    status?: EnumContainerStatusFieldUpdateOperationsInput | $Enums.ContainerStatus
    bookingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    shipmentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shipment?: ShipmentUpdateOneWithoutContainerNestedInput
  }

  export type ContainerUncheckedUpdateWithoutGoodsInput = {
    containerId?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    currentPort?: StringFieldUpdateOperationsInput | string
    status?: EnumContainerStatusFieldUpdateOperationsInput | $Enums.ContainerStatus
    bookingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    shipmentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shipment?: ShipmentUncheckedUpdateOneWithoutContainerNestedInput
  }

  export type ShipmentUpsertWithoutGoodsInput = {
    update: XOR<ShipmentUpdateWithoutGoodsInput, ShipmentUncheckedUpdateWithoutGoodsInput>
    create: XOR<ShipmentCreateWithoutGoodsInput, ShipmentUncheckedCreateWithoutGoodsInput>
    where?: ShipmentWhereInput
  }

  export type ShipmentUpdateToOneWithWhereWithoutGoodsInput = {
    where?: ShipmentWhereInput
    data: XOR<ShipmentUpdateWithoutGoodsInput, ShipmentUncheckedUpdateWithoutGoodsInput>
  }

  export type ShipmentUpdateWithoutGoodsInput = {
    shipmentCode?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    currentPort?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    departureDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedArrival?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualArrival?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    currentLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    container?: ContainerUpdateOneRequiredWithoutShipmentNestedInput
    logs?: LogUpdateManyWithoutShipmentNestedInput
    documents?: DocumentUpdateManyWithoutShipmentNestedInput
    gpsUpdates?: GpsUpdateUpdateManyWithoutShipmentNestedInput
  }

  export type ShipmentUncheckedUpdateWithoutGoodsInput = {
    shipmentCode?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    currentPort?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    departureDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedArrival?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualArrival?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    containerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    currentLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    logs?: LogUncheckedUpdateManyWithoutShipmentNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutShipmentNestedInput
    gpsUpdates?: GpsUpdateUncheckedUpdateManyWithoutShipmentNestedInput
  }

  export type ShipmentCreateWithoutLogsInput = {
    id?: string
    shipmentCode: string
    origin: string
    destination: string
    currentPort: string
    status?: $Enums.ShipmentStatus
    departureDate?: Date | string | null
    estimatedArrival?: Date | string | null
    actualArrival?: Date | string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    currentLatitude?: number | null
    currentLongitude?: number | null
    container: ContainerCreateNestedOneWithoutShipmentInput
    documents?: DocumentCreateNestedManyWithoutShipmentInput
    Goods?: GoodsCreateNestedManyWithoutShipmentInput
    gpsUpdates?: GpsUpdateCreateNestedManyWithoutShipmentInput
  }

  export type ShipmentUncheckedCreateWithoutLogsInput = {
    id?: string
    shipmentCode: string
    origin: string
    destination: string
    currentPort: string
    status?: $Enums.ShipmentStatus
    departureDate?: Date | string | null
    estimatedArrival?: Date | string | null
    actualArrival?: Date | string | null
    containerId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    currentLatitude?: number | null
    currentLongitude?: number | null
    documents?: DocumentUncheckedCreateNestedManyWithoutShipmentInput
    Goods?: GoodsUncheckedCreateNestedManyWithoutShipmentInput
    gpsUpdates?: GpsUpdateUncheckedCreateNestedManyWithoutShipmentInput
  }

  export type ShipmentCreateOrConnectWithoutLogsInput = {
    where: ShipmentWhereUniqueInput
    create: XOR<ShipmentCreateWithoutLogsInput, ShipmentUncheckedCreateWithoutLogsInput>
  }

  export type ShipmentUpsertWithoutLogsInput = {
    update: XOR<ShipmentUpdateWithoutLogsInput, ShipmentUncheckedUpdateWithoutLogsInput>
    create: XOR<ShipmentCreateWithoutLogsInput, ShipmentUncheckedCreateWithoutLogsInput>
    where?: ShipmentWhereInput
  }

  export type ShipmentUpdateToOneWithWhereWithoutLogsInput = {
    where?: ShipmentWhereInput
    data: XOR<ShipmentUpdateWithoutLogsInput, ShipmentUncheckedUpdateWithoutLogsInput>
  }

  export type ShipmentUpdateWithoutLogsInput = {
    shipmentCode?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    currentPort?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    departureDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedArrival?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualArrival?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    currentLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    container?: ContainerUpdateOneRequiredWithoutShipmentNestedInput
    documents?: DocumentUpdateManyWithoutShipmentNestedInput
    Goods?: GoodsUpdateManyWithoutShipmentNestedInput
    gpsUpdates?: GpsUpdateUpdateManyWithoutShipmentNestedInput
  }

  export type ShipmentUncheckedUpdateWithoutLogsInput = {
    shipmentCode?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    currentPort?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    departureDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedArrival?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualArrival?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    containerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    currentLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    documents?: DocumentUncheckedUpdateManyWithoutShipmentNestedInput
    Goods?: GoodsUncheckedUpdateManyWithoutShipmentNestedInput
    gpsUpdates?: GpsUpdateUncheckedUpdateManyWithoutShipmentNestedInput
  }

  export type ShipmentCreateWithoutDocumentsInput = {
    id?: string
    shipmentCode: string
    origin: string
    destination: string
    currentPort: string
    status?: $Enums.ShipmentStatus
    departureDate?: Date | string | null
    estimatedArrival?: Date | string | null
    actualArrival?: Date | string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    currentLatitude?: number | null
    currentLongitude?: number | null
    container: ContainerCreateNestedOneWithoutShipmentInput
    logs?: LogCreateNestedManyWithoutShipmentInput
    Goods?: GoodsCreateNestedManyWithoutShipmentInput
    gpsUpdates?: GpsUpdateCreateNestedManyWithoutShipmentInput
  }

  export type ShipmentUncheckedCreateWithoutDocumentsInput = {
    id?: string
    shipmentCode: string
    origin: string
    destination: string
    currentPort: string
    status?: $Enums.ShipmentStatus
    departureDate?: Date | string | null
    estimatedArrival?: Date | string | null
    actualArrival?: Date | string | null
    containerId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    currentLatitude?: number | null
    currentLongitude?: number | null
    logs?: LogUncheckedCreateNestedManyWithoutShipmentInput
    Goods?: GoodsUncheckedCreateNestedManyWithoutShipmentInput
    gpsUpdates?: GpsUpdateUncheckedCreateNestedManyWithoutShipmentInput
  }

  export type ShipmentCreateOrConnectWithoutDocumentsInput = {
    where: ShipmentWhereUniqueInput
    create: XOR<ShipmentCreateWithoutDocumentsInput, ShipmentUncheckedCreateWithoutDocumentsInput>
  }

  export type ShipmentUpsertWithoutDocumentsInput = {
    update: XOR<ShipmentUpdateWithoutDocumentsInput, ShipmentUncheckedUpdateWithoutDocumentsInput>
    create: XOR<ShipmentCreateWithoutDocumentsInput, ShipmentUncheckedCreateWithoutDocumentsInput>
    where?: ShipmentWhereInput
  }

  export type ShipmentUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: ShipmentWhereInput
    data: XOR<ShipmentUpdateWithoutDocumentsInput, ShipmentUncheckedUpdateWithoutDocumentsInput>
  }

  export type ShipmentUpdateWithoutDocumentsInput = {
    shipmentCode?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    currentPort?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    departureDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedArrival?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualArrival?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    currentLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    container?: ContainerUpdateOneRequiredWithoutShipmentNestedInput
    logs?: LogUpdateManyWithoutShipmentNestedInput
    Goods?: GoodsUpdateManyWithoutShipmentNestedInput
    gpsUpdates?: GpsUpdateUpdateManyWithoutShipmentNestedInput
  }

  export type ShipmentUncheckedUpdateWithoutDocumentsInput = {
    shipmentCode?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    currentPort?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    departureDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedArrival?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualArrival?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    containerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    currentLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    logs?: LogUncheckedUpdateManyWithoutShipmentNestedInput
    Goods?: GoodsUncheckedUpdateManyWithoutShipmentNestedInput
    gpsUpdates?: GpsUpdateUncheckedUpdateManyWithoutShipmentNestedInput
  }

  export type GoodsCreateManyContainerInput = {
    id?: string
    description: string
    quantity: number
    weight: number
    value: number
    shipmentId: string
    createdAt?: Date | string
  }

  export type GoodsUpdateWithoutContainerInput = {
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    value?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shipment?: ShipmentUpdateOneRequiredWithoutGoodsNestedInput
  }

  export type GoodsUncheckedUpdateWithoutContainerInput = {
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    value?: FloatFieldUpdateOperationsInput | number
    shipmentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoodsUncheckedUpdateManyWithoutContainerInput = {
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    value?: FloatFieldUpdateOperationsInput | number
    shipmentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogCreateManyShipmentInput = {
    id?: string
    message: string
    location?: string | null
    status?: string | null
    timestamp?: Date | string
  }

  export type DocumentCreateManyShipmentInput = {
    id?: string
    name: string
    type: string
    url: string
    uploadedAt?: Date | string
  }

  export type GoodsCreateManyShipmentInput = {
    id?: string
    description: string
    quantity: number
    weight: number
    value: number
    containerId: string
    createdAt?: Date | string
  }

  export type GpsUpdateCreateManyShipmentInput = {
    id?: string
    latitude: number
    longitude: number
    timestamp?: Date | string
    speed?: number | null
    heading?: number | null
  }

  export type LogUpdateWithoutShipmentInput = {
    message?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogUncheckedUpdateWithoutShipmentInput = {
    message?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogUncheckedUpdateManyWithoutShipmentInput = {
    message?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUpdateWithoutShipmentInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateWithoutShipmentInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateManyWithoutShipmentInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoodsUpdateWithoutShipmentInput = {
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    value?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    container?: ContainerUpdateOneRequiredWithoutGoodsNestedInput
  }

  export type GoodsUncheckedUpdateWithoutShipmentInput = {
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    value?: FloatFieldUpdateOperationsInput | number
    containerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoodsUncheckedUpdateManyWithoutShipmentInput = {
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    value?: FloatFieldUpdateOperationsInput | number
    containerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GpsUpdateUpdateWithoutShipmentInput = {
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    speed?: NullableFloatFieldUpdateOperationsInput | number | null
    heading?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type GpsUpdateUncheckedUpdateWithoutShipmentInput = {
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    speed?: NullableFloatFieldUpdateOperationsInput | number | null
    heading?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type GpsUpdateUncheckedUpdateManyWithoutShipmentInput = {
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    speed?: NullableFloatFieldUpdateOperationsInput | number | null
    heading?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}