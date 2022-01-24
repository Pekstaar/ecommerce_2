import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Products extends BaseSchema {
  protected tableName = 'products'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('product_image_id').notNullable().unsigned()
      table.integer('category_id').notNullable()
      table.string('name').notNullable()
      table.integer('price').notNullable()
      table.string('product_description').notNullable()
      table.integer('quantity').notNullable()
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
