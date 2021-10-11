# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.5.0] - 2021-10-11
### Removed
### Changed
- 
### Added
- Product List routing
- Product View component
- Product Service - getProduct

## [0.4.0] - 2021-10-03
### Removed
### Changed
- getProducts returns Observable
- onAddToCart accepts ProductModel instead of productId
- import CommonModule to use from SharedModule 
### Added
- Titlecase for cart & product items name
- Angular Material
- Cart list ordered by (Amount, DateAdded)
- Product list ordering by fields with ASC / DESC checkbox

## [0.3.0] - 2021-09-27
### Removed
### Changed
- Renamed some fields of CartService
- SetQuantity to decreaseAmount / increaseAmount methods
### Added
- CartService: increaseQuantity, decreaseQuantity, isEmptyCart, removeAllProducts
- NoScrollDirective
- Core module
- ConfigOptionsService
- ConstantsService
- GeneratorService
### Pipes Used in
- shp.component to display services results (json)
- Cart Item (titlecase, currency)
- Cart List (orderBy, currency)
- Product (titlecase, currency)
- Product List (orderBy twice)


## [0.2.0] - 2021-09-15
### Removed
- Test First component
### Changed
- CartService is called from ProductListComponent 
### Added
- ProductsModule, CartModule, OrdersModule, SharedModule
- CartListComponent displays total price
- FontAwesome
- CartItemComponent
- Ability to edit cart amount
- Ability to remove amount
- Ability to manipulate cart amount by mouse wheel
- Page title that managed from the main component
- HighlightDirective
- Product Price highlighted by border color
- Product that isn't available - could not be bought

## [0.1.1] - 2021-09-15
### Changed
- Fixed code style issues
- Cart List item identify by Id

## [0.1.0] - 2021-09-13
### Added
- FirstComponent to demo basic functionality
- Product & ProductList components
 - CartList component
- Product & Cart services
- Feature "Buy a product"
- Lint rules