package ru.skillfactorydemo.tgbot.controllers;

import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import ru.skillfactorydemo.tgbot.dto.ValuteCursOnDate;
import ru.skillfactorydemo.tgbot.service.CentralRussianBankService;
import ru.skillfactorydemo.tgbot.service.StatsService;

import javax.xml.datatype.DatatypeConfigurationException;
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

    @RequestMapping("/getCurrentValuteOnCode/${code}")
    @ApiOperation(value = "Курс определенной валюты по коду за день")
    public ValuteCursOnDate getCurrentValuteOnCode(@PathVariable String code) throws Exception {
        return centralRussianBankService.getCourseForCurrency(code);
    }

    @GetMapping("/getStats")
    @ApiOperation(value = "Получение количества пополнений, которые превышают определенную сумму")
    public int getStatsAboutIncomesThatGreater(@RequestParam(value = "amount")BigDecimal amount) {
        return statsService.getCountOfIncomesThatGreater(amount);
    }
}
