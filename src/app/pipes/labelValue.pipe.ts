import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'labelValue',
  standalone: true,
  pure: true
})

export class LabelValuePipe implements PipeTransform {
  transform(value?: string | null, label?: string | null): string {
    if (!value) return '';
    return label ? `${label}: ${value}` : value;
  }
}
