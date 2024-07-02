#!/usr/bin/env node
import { playGame } from '../src/index.js';
import { gameDescription, getGameSet } from '../src/games/brain-even.js';

playGame(gameDescription, getGameSet);
