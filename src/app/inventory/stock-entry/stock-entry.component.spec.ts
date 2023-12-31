import { ComponentFixture, TestBed } from '@angular/core/testing'

import { StockEntryComponent } from './stock-entry.component'

describe('StockEntryComponent', () => {
  let component: StockEntryComponent
  let fixture: ComponentFixture<StockEntryComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StockEntryComponent]
    })
    fixture = TestBed.createComponent(StockEntryComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
