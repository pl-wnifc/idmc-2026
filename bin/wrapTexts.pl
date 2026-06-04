#!/usr/bin/perl

use strict;
use warnings;

my $width = 59;

while (my $paragraph = <>) {
    chomp $paragraph;

    my @words = split /\s+/, $paragraph;
    my $line = '';

    for my $word (@words) {
        if ($line eq '') {
            $line = $word;
        }
        elsif (length($line) + 1 + length($word) <= $width) {
            $line .= " $word";
        }
        else {
            print "$line\n";
            $line = $word;
        }
    }

    print "$line\n\n" if $line ne '';
}
