import './util/module-alias';
import { Server } from '@overnightjs/core';
import express, { Application } from 'express';
import { ForeCastController } from './controllers/forecast';

export class SetupServer extends Server {
  constructor(private port = 3333) {
    super();
  }

  public init(): void {
    this.setupExpress();
    this.setupController();
  }

  private setupExpress(): void {
    this.app.use(express.json());
  }

  private setupController(): void {
    const forecastController = new ForeCastController();
    this.addControllers([forecastController]);
  }

  public getApp(): Application {
    return this.app;
  }
}