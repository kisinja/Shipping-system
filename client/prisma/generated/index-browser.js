
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.ContainerScalarFieldEnum = {
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

exports.Prisma.ShipmentScalarFieldEnum = {
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

exports.Prisma.GpsUpdateScalarFieldEnum = {
  id: 'id',
  shipmentId: 'shipmentId',
  latitude: 'latitude',
  longitude: 'longitude',
  timestamp: 'timestamp',
  speed: 'speed',
  heading: 'heading'
};

exports.Prisma.GoodsScalarFieldEnum = {
  id: 'id',
  description: 'description',
  quantity: 'quantity',
  weight: 'weight',
  value: 'value',
  containerId: 'containerId',
  shipmentId: 'shipmentId',
  createdAt: 'createdAt'
};

exports.Prisma.LogScalarFieldEnum = {
  id: 'id',
  shipmentId: 'shipmentId',
  message: 'message',
  location: 'location',
  status: 'status',
  timestamp: 'timestamp'
};

exports.Prisma.DocumentScalarFieldEnum = {
  id: 'id',
  name: 'name',
  type: 'type',
  url: 'url',
  shipmentId: 'shipmentId',
  uploadedAt: 'uploadedAt'
};

exports.Prisma.PortScalarFieldEnum = {
  id: 'id',
  code: 'code',
  name: 'name',
  country: 'country',
  city: 'city',
  latitude: 'latitude',
  longitude: 'longitude',
  createdAt: 'createdAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};
exports.ContainerStatus = exports.$Enums.ContainerStatus = {
  AVAILABLE: 'AVAILABLE',
  BOOKED: 'BOOKED',
  IN_TRANSIT: 'IN_TRANSIT',
  READY_FOR_SHIPMENT: 'READY_FOR_SHIPMENT',
  AT_PORT: 'AT_PORT',
  DELIVERED: 'DELIVERED',
  MAINTENANCE: 'MAINTENANCE'
};

exports.ShipmentStatus = exports.$Enums.ShipmentStatus = {
  PENDING: 'PENDING',
  IN_TRANSIT: 'IN_TRANSIT',
  AT_PORT: 'AT_PORT',
  CUSTOMS_HOLD: 'CUSTOMS_HOLD',
  DELIVERED: 'DELIVERED',
  CANCELLED: 'CANCELLED'
};

exports.Prisma.ModelName = {
  Container: 'Container',
  Shipment: 'Shipment',
  GpsUpdate: 'GpsUpdate',
  Goods: 'Goods',
  Log: 'Log',
  Document: 'Document',
  Port: 'Port'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
