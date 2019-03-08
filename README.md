# Busx a easy JS eventbus

A eventbus to be easy to use and very small.

## Install

- Run `npm install busx`

## Usage

Import Busx to any place of your application, where you can share the Busx intance

`import Busx from 'busx'`

Create a new instance

`const bus = new Busx()`

## Available methods

- (**listen**) This method await until the named event be dispatched

  `bus.listen('event-name', data => { // Do wat you want })`

- (**fire**) This method dispatch a event

  `bus.fire('event-name', data)`

On the **fire** event the **data** parameter it's optional

- (**all**) This method return all events registered on the instance

  `bus.all()`
