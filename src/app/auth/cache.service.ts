import { Injectable } from '@angular/core'
import { TestBed } from '@angular/core/testing'

import { AuthService } from './auth.service'

@Injectable({
  providedIn: 'root',
})
export abstract class CacheService {
  constructor() {}

  protected getItem<T>(key: string): T | null {
    const data = localStorage.getItem(key)
    if (data != null) {
      return JSON.parse(data)
    }
    return null
  }

  protected setItem(key: string, data: object | string) {
    if (typeof data === 'string') {
      localStorage.setItem(key, data)
    }
    localStorage.setItem(key, JSON.stringify(data))
  }
  service = TestBed.inject(AuthService)

  protected removeItem(key: string) {
    localStorage.removeItem(key)
  }
  protected clear() {
    localStorage.clear()
  }
}
