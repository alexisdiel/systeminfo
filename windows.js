module.exports = {
  version: '4.1.4',
  system: {
    manufacturer: 'Dell Inc.',
    model: 'Latitude 3480',
    version: '',
    serial: '8T4BQM2',
    uuid: '4C4C4544-0054-3410-8042-B8C04F514D32',
    sku: '07B7'
  },
  bios: {
    vendor: 'Dell Inc.',
    version: 'DELL   - 1072009',
    releaseDate: '2018-01-30',
    revision: ''
  },
  baseboard: {
    manufacturer: 'Dell Inc.',
    model: '06M7PJ',
    version: 'A00',
    serial: '/8T4BQM2/BRCMJ007BM01C7/',
    assetTag: ''
  },
  chassis: {
    manufacturer: 'Dell Inc.',
    model: '',
    type: 'Notebook',
    version: '',
    serial: '8T4BQM2',
    assetTag: '',
    sku: ''
  },
  os: {
    platform: 'win32',
    distro: 'Microsoft Windows 10 Pro',
    release: '10.0.15063',
    codename: '',
    kernel: '10.0.15063',
    arch: 'x64',
    hostname: 'POAN040100911',
    codepage: ' 850',
    logofile: 'windows',
    serial: '00331-20020-00000-AA431',
    build: '15063'
  },
  uuid: {
    os: '9952c57e-2bb2-42c0-9813-df40091ea0a0'
  },
  versions: {
    kernel: '10.0.15063',
    openssl: '1.1.0j',
    systemOpenssl: '',
    systemOpensslLib: '',
    node: '10.15.0',
    v8: '6.8.275.32-node.45',
    npm: '6.9.0',
    yarn: '',
    pm2: '',
    gulp: '2.1.0',
    grunt: '',
    git: '2.19.1.windows.1',
    tsc: '',
    mysql: '',
    redis: '',
    mongodb: '',
    apache: '',
    nginx: '',
    php: '',
    docker: '',
    postfix: '',
    postgresql: '',
    perl: '',
    python: '',
    python3: '',
    pip: '',
    pip3: '',
    java: '1.8.0_201',
    gcc: ''
  },
  cpu: {
    manufacturer: 'Intel®',
    brand: 'Core™ i5-6200U',
    vendor: 'GenuineIntel',
    family: '6',
    model: '78',
    stepping: '3',
    revision: '19971',
    voltage: '',
    speed: '2.30',
    speedmin: '',
    speedmax: '2.40',
    cores: 4,
    physicalCores: 2,
    processors: 1,
    socket: 'Other',
    cache: {
      l1d: 0,
      l1i: 0,
      l2: 524288,
      l3: 3145728
    },
    flags: 'de pse tsc msr mce sep mtrr mca cmov psn clfsh ds acpi mmx fxsr sse sse2 ss htt tm ia64 pbe'
  },
  graphics: {
    controllers: [
      {
        model: 'Intel(R) HD Graphics 520',
        vendor: 'Intel Corporation',
        bus: 'PCI',
        vram: 1024,
        vramDynamic: true
      }
    ],
    displays: [
      {
        model: '(Tipos de monitor padr\ufffdo)',
        main: false,
        builtin: false,
        connection: '',
        resolutionx: 1366,
        resolutiony: 768,
        sizex: -1,
        sizey: -1,
        pixeldepth: 32
      }
    ]
  },
  net: [
    {
      iface: 'Ethernet',
      ifaceName: 'Realtek PCIe GBE Family Controller',
      ip4: '10.51.4.39',
      ip6: 'fe80::fd9d:6bee:cc14:6bdf',
      mac: '18:66:da:ff:63:ce',
      internal: false,
      operstate: 'up',
      type: 'wired',
      duplex: '',
      mtu: '',
      speed: 1000,
      carrierChanges: 0
    },
    {
      iface: 'Loopback Pseudo-Interface 1',
      ifaceName: 'Loopback Pseudo-Interface 1',
      ip4: '127.0.0.1',
      ip6: '::1',
      mac: '00:00:00:00:00:00',
      internal: true,
      operstate: 'down',
      type: '',
      duplex: '',
      mtu: '',
      speed: -1,
      carrierChanges: 0
    }
  ],
  memLayout: [
    {
      size: 4294967296,
      bank: 'BANK 0',
      type: 'Unknown',
      clockSpeed: 2133,
      formFactor: 'SODIMM',
      manufacturer: '079E00000792',
      partNum: 'TMA851S6AFR6N-UHHC',
      serialNum: 'A5160300',
      voltageConfigured: 1.2,
      voltageMin: 1.2,
      voltageMax: 1.2
    },
    {
      size: 4294967296,
      bank: 'BANK 2',
      type: 'Unknown',
      clockSpeed: 2133,
      formFactor: 'SODIMM',
      manufacturer: '079E00000792',
      partNum: 'TMA851S6AFR6N-UHHC',
      serialNum: 'A4160300',
      voltageConfigured: 1.2,
      voltageMin: 1.2,
      voltageMax: 1.2
    }
  ],
  diskLayout: [
    {
      device: '',
      type: 'SSD',
      name: 'KINGSTON SUV400S37240G',
      vendor: '(Unidades de disco padr\ufffdo)',
      size: 240054796800,
      bytesPerSector: 512,
      totalCylinders: 29185,
      totalHeads: 255,
      totalSectors: 468857025,
      totalTracks: 7442175,
      tracksPerCylinder: 255,
      sectorsPerTrack: 63,
      firmwareRevision: '0C3J96R9',
      serialNum: '50026B776A04F5B1',
      interfaceType: 'RAID',
      smartStatus: 'Ok'
    }
  ]
}