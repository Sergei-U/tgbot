package ru.demo.tgbot.controllers;

import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import ru.demo.tgbot.dto.ValuteCursOnDate;
import ru.demo.tgbot.entity.Income;
import ru.demo.tgbot.entity.Spend;
import ru.demo.tgbot.service.CentralRussianBankService;
import ru.demo.tgbot.service.StatsService;

import java.math.BigDecimal;
import java.util.List;

@RestController
@RequiredArgsConstructor
public class CurrencyController {

    private final CentralRussianBankService centralRussianBankService;
    private final StatsService statsService;

    @GetMapping("/getCurrencies")
    @ApiOperation(value = "Курс валют за день")
    public List<ValuteCursOnDate> getValuteCursOnDate() throws Exception {
        return centralRussianBankService.getCurrenciesFromCbr();
    }

    @RequestMapping("/getCurrencies/{code}")
    @ApiOperation(value = "Курс определенной валюты по коду за день")
    public ValuteCursOnDate getCurrentValuteOnCode(@PathVariable String code) throws Exception {
        return centralRussianBankService.getCourseForCurrency(code);
    }

    @GetMapping("/getStatsIncomes")
    @ApiOperation(value = "Получение количества пополнений, которые превышают определенную сумму")
    public int getStatsAboutIncomesThatGreater(@RequestParam(value = "amount") BigDecimal amount) {
        return statsService.getCountOfIncomesThatGreater(amount);
    }

    @GetMapping("/getStatsSpend")
    @ApiOperation(value = "Получение количества расходных операций, которые превышают определенную сумму")
    public int getCountOfIncomesThatGreaterThanLongAmount(@RequestParam(value = "amount") Long amount) {
        return statsService.getCountOfIncomesThatGreaterThanLongAmount(amount);
    }


    @GetMapping("/getStatsIncomesDate")
    @ApiOperation(value = "Получение количества пополнений, которые превышают определенную сумму за последние дни с фильтром")
    public List<Income> getStatsAboutIncomesThatGreaterThanDate(@RequestParam(value = "amount") BigDecimal amount) {
        return statsService.getIncomeGreaterThan(amount);
    }

    @GetMapping("/getStatsSpendDate")
    @ApiOperation(value = "Получение количества расходных операций, которые превышают определенную сумму за последние дни с фильтром")
    public List<Spend> getCountOfIncomesThatGreaterThanLongAmountThanDate(@RequestParam(value = "amount") Long amount) {
        return statsService.getSpendGreaterThan(amount);
    }
}
