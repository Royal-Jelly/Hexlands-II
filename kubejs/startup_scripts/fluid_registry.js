onEvent('fluid.registry', function (event) {
      event.create('crude_oil_light').textureThin(0x252500).bucketColor(0x252500).displayName('Light Crude Oil')

      event.create('water_sulfur').textureThin(0x816C25).bucketColor(0x816C25).displayName('Sulfurized Water')
      event.create('lubricant_sulfur').textureThin(0xFFCC33).bucketColor(0xFFCC33).displayName('Sulfurized Lubricant')
      event.create('gasoline_sulfur').textureThin(0xFFCC33).bucketColor(0xFFCC33).displayName('Sulfurized Gasoline')

      event.create('naptha_sulfur').textureThin(0xa3a55d).bucketColor(0xa3a55d).displayName('Sulfurized Naptha')
      event.create('naptha').textureThin(0xFFFFFF).bucketColor(0xFFFFFF).displayName('Naptha')

      event.create('liquid_resin').textureThin(0xB7A99A).bucketColor(0xB7A99A).displayName('Liquid Resin')
      event.create('sticky_sap').textureThin(0x854D3A).bucketColor(0x854D3A).displayName('Sticky Syrup')
      //event.create('resin').displayName('Liquid Resin').textureStill('kubejs:block/resin_still').textureFlowing('kubejs:block/resin_flow').bucketColor(0xFFF0E0)
      //event.create('sap').displayName('Sticky Sap').textureStill('kubejs:block/sap_still').textureFlowing('kubejs:block/sap_flow').bucketColor(0xBB9351)
});
