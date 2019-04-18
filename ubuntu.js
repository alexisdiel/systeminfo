module.exports = {
  version: '4.1.4',
  system: {
    manufacturer: 'Dell Inc.',
    model: 'Latitude 3490',
    version: '',
    serial: '-',
    uuid: '',
    sku: '-'
  },
  bios: {
    vendor: 'Dell Inc.',
    version: '1.9.1',
    releaseDate: '2018-08-15',
    revision: ''
  },
  baseboard: {
    manufacturer: 'Dell Inc.',
    model: '04HCMV',
    version: 'A02',
    serial: '',
    assetTag: ''
  },
  chassis: {
    manufacturer: 'Dell Inc.',
    model: '',
    type: 'Notebook',
    version: '',
    serial: '',
    assetTag: '',
    sku: ''
  },
  os: {
    platform: 'linux',
    distro: 'Ubuntu',
    release: '18.04.2 LTS',
    codename: 'Bionic Beaver',
    kernel: '4.18.0-17-generic',
    arch: 'x64',
    hostname: 'oslo',
    codepage: 'UTF-8',
    logofile: 'ubuntu',
    serial: '572e0d1db4954eb9bd0d2e3dc7d5260c',
    build: ''
  },
  uuid: {
    os: '572e0d1db4954eb9bd0d2e3dc7d5260c'
  },
  versions: {
    kernel: '4.18.0-17-generic',
    openssl: '1.0.2n',
    systemOpenssl: '1.1.0g',
    systemOpensslLib: 'OpenSSL',
    node: '8.10.0',
    v8: '6.2.414.50',
    npm: '3.5.2',
    yarn: '',
    pm2: '',
    gulp: '',
    grunt: '',
    git: '2.21.0',
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
    perl: '5.26.1',
    python: '2.7.15rc1',
    python3: '3.6.7',
    pip: '',
    pip3: '',
    java: '',
    gcc: '7.3.0'
  },
  cpu: {
    manufacturer: 'Intel®',
    brand: 'Core™ i7-8550U',
    vendor: 'GenuineIntel',
    family: '6',
    model: '142',
    stepping: '10',
    revision: '',
    voltage: '',
    speed: '1.80',
    speedmin: '0.40',
    speedmax: '4.00',
    cores: 8,
    physicalCores: 4,
    processors: 1,
    socket: '',
    cache: {
      l1d: 32768,
      l1i: 32768,
      l2: 262144,
      l3: 8388608
    },
    flags: 'fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush dts acpi mmx fxsr sse sse2 ss ht tm pbe syscall nx pdpe1gb rdtscp lm constant_tsc art arch_perfmon pebs bts rep_good nopl xtopology nonstop_tsc cpuid aperfmperf tsc_known_freq pni pclmulqdq dtes64 monitor ds_cpl vmx est tm2 ssse3 sdbg fma cx16 xtpr pdcm pcid sse4_1 sse4_2 x2apic movbe popcnt tsc_deadline_timer aes xsave avx f16c rdrand lahf_lm abm 3dnowprefetch cpuid_fault epb invpcid_single pti ssbd ibrs ibpb stibp tpr_shadow vnmi flexpriority ept vpid fsgsbase tsc_adjust bmi1 avx2 smep bmi2 erms invpcid mpx rdseed adx smap clflushopt intel_pt xsaveopt xsavec xgetbv1 xsaves dtherm ida arat pln pts hwp hwp_notify hwp_act_window hwp_epp flush_l1d'
  },
  graphics: {
    controllers: [
      {
        vendor: 'Intel Corporation',
        model: 'UHD Graphics 620 ',
        bus: 'Onboard',
        vram: 256,
        vramDynamic: false
      }
    ],
    displays: [
      {
        model: '',
        main: true,
        builtin: true,
        connection: 'eDP-1',
        sizex: 309,
        sizey: 174,
        pixeldepth: 24,
        resolutionx: 1920,
        resolutiony: 1080
      },
      {
        model: 'DELL P1913',
        main: false,
        builtin: false,
        connection: 'HDMI-1',
        sizex: 309,
        sizey: 174,
        pixeldepth: 24,
        resolutionx: 1920,
        resolutiony: 1080
      },
      {
        model: 'DELL P1913',
        main: false,
        builtin: false,
        connection: 'DP-1',
        sizex: 309,
        sizey: 174,
        pixeldepth: 24,
        resolutionx: 1920,
        resolutiony: 1080
      }
    ]
  },
  net: [
    {
      iface: 'lo',
      ifaceName: 'lo',
      ip4: '127.0.0.1',
      ip6: '::1',
      mac: '',
      internal: true,
      operstate: 'unknown',
      type: 'virtual',
      duplex: '',
      mtu: 65536,
      speed: -1,
      carrierChanges: 0
    },
    {
      iface: 'wlp2s0',
      ifaceName: 'wlp2s0',
      ip4: '10.51.8.149',
      ip6: 'fe80::e17a:7fdb:5a15:2595',
      mac: '74:40:bb:f3:31:bf',
      internal: false,
      operstate: 'up',
      type: 'wireless',
      duplex: '',
      mtu: 1500,
      speed: 6,
      carrierChanges: 2
    }
  ],
  memLayout: [],
  diskLayout: [
    {
      device: '/dev/sda',
      type: 'SSD',
      name: 'LITEON CV8-8E256',
      vendor: 'ATA',
      size: '256060514304',
      bytesPerSector: -1,
      totalCylinders: -1,
      totalHeads: -1,
      totalSectors: -1,
      totalTracks: -1,
      tracksPerCylinder: -1,
      sectorsPerTrack: -1,
      firmwareRevision: '10B',
      serialNum: 'TW0WJT50LOH0089501XF',
      interfaceType: 'SATA',
      smartStatus: 'unknown'
    },
    {
      device: '/dev/sdb',
      type: 'HD',
      name: 'Flash Disk      ',
      vendor: 'Generic',
      size: '15938355200',
      bytesPerSector: -1,
      totalCylinders: -1,
      totalHeads: -1,
      totalSectors: -1,
      totalTracks: -1,
      tracksPerCylinder: -1,
      sectorsPerTrack: -1,
      firmwareRevision: '8.07',
      serialNum: '5F23F040',
      interfaceType: 'USB',
      smartStatus: 'unknown'
    }
  ]
}