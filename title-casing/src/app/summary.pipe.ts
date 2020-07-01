import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'summary'
})

export class SummaryPipe implements PipeTransform {
    transform(value: string): any {
        if (!value) return null;

        let preps = ["of", "the", "a"]

        let words = value.split(' ');
        for (var i = 0; i < words.length; i++){
            if (i > 0 && preps.includes(words[i]))
                words[i] = words[i].toLowerCase();
            else {
                words[i] = words[i].substr(0,1).toUpperCase() + words[i].substr(1).toLowerCase();
            }

        }
        return words.join(' ');
    }
}